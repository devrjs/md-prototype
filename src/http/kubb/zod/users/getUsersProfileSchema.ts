/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { ToZod } from '@kubb/plugin-zod/utils'
import type {
  GetUsersProfile200Type,
  GetUsersProfile401Type,
  GetUsersProfile404Type,
  GetUsersProfileQueryResponseType,
} from '../../types/users/GetUsersProfileType'
import { z } from 'zod'

/**
 * @description Informações do perfil do usuário obtidas com sucesso.
 */
export const getUsersProfile200Schema = z
  .object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    role: z.enum(['MEMBER', 'ADMIN']),
  })
  .describe('Informações do perfil do usuário obtidas com sucesso.') as unknown as ToZod<GetUsersProfile200Type>

/**
 * @description Usuário não autenticado.
 */
export const getUsersProfile401Schema = z
  .object({
    message: z.string(),
  })
  .describe('Usuário não autenticado.') as unknown as ToZod<GetUsersProfile401Type>

/**
 * @description Usuário não encontrado.
 */
export const getUsersProfile404Schema = z
  .object({
    message: z.string(),
  })
  .describe('Usuário não encontrado.') as unknown as ToZod<GetUsersProfile404Type>

export const getUsersProfileQueryResponseSchema = z.lazy(() => getUsersProfile200Schema) as unknown as ToZod<GetUsersProfileQueryResponseType>