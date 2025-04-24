import { getUsersProfile } from "@/http/orval/api";
import { getServerCookies } from "@/http/server-utils";

// Este é um componente de servidor (Server Component)
export default async function ServerExample() {
  // Obtém os cookies do servidor de forma assíncrona
  const serverCookies = await getServerCookies();

  // Tenta buscar o perfil do usuário usando os cookies do servidor
  let userData = null;
  let error = null;

  try {
    // Passa os cookies do servidor para a função da API
    userData = await getUsersProfile({}, serverCookies);
  } catch (e) {
    error = e instanceof Error ? e.message : "Erro ao buscar dados do usuário";
  }

  return (
    <main className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Exemplo de Componente de Servidor</h1>
      <p className="text-gray-600 mb-4">
        Esta página demonstra como usar o cliente HTTP adaptado em um componente
        de servidor.
      </p>

      {error ? (
        <div className="p-4 bg-red-100 border border-red-300 rounded-md text-red-700">
          <h2 className="font-semibold">Erro:</h2>
          <p>{error}</p>
          <p className="mt-2 text-sm">
            Nota: Você precisa estar autenticado para ver os dados do usuário.
            Visite a página inicial para fazer login primeiro.
          </p>
        </div>
      ) : userData ? (
        <div className="p-4 bg-green-100 border border-green-300 rounded-md">
          <h2 className="font-semibold">Dados do Usuário:</h2>
          <pre className="mt-2 p-2 bg-white rounded overflow-auto max-w-full">
            {JSON.stringify(userData, null, 2)}
          </pre>
        </div>
      ) : (
        <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-md">
          <p>Carregando dados do usuário...</p>
        </div>
      )}

      <div className="mt-6">
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Voltar para página inicial
        </a>
      </div>
    </main>
  );
}
