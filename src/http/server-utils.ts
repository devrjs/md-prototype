/**
 * Utilitários para uso do cliente HTTP no lado do servidor
 */

import { cookies } from "next/headers";

/**
 * Obtém a string de cookies do servidor para uso nas requisições HTTP
 * @returns string de cookies formatada para uso no cliente HTTP
 */
export async function getServerCookies(): Promise<string> {
  const cookieStore = cookies();
  // Usando o método getAll de forma assíncrona no objeto cookies
  const cookiesList = (await cookieStore).getAll();

  // Converte os cookies para o formato de string usado no navegador
  return cookiesList
    .map(
      (cookie: { name: string; value: string }) =>
        `${cookie.name}=${cookie.value}`
    )
    .join("; ");
}

/**
 * Exemplo de como usar o cliente HTTP em uma função de servidor
 *
 * Exemplo de uso em um Server Action ou Route Handler:
 *
 * ```ts
 * import { getServerCookies } from '@/http/server-utils';
 * import { getUsersProfile } from '@/http/orval/api';
 *
 * export async function fetchUserProfile() {
 *   // Passa os cookies do servidor para a função da API
 *   const serverCookies = await getServerCookies();
 *   return getUsersProfile({}, serverCookies);
 * }
 * ```
 */
