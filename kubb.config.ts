import { defineConfig } from '@kubb/core'
import { pluginClient } from '@kubb/plugin-client'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTs } from '@kubb/plugin-ts'
import { pluginZod } from '@kubb/plugin-zod'

const OUTPUT_PATH = './src/http/kubb'

export default defineConfig({
  // 🔹 URL do Swagger JSON (OpenAPI) para gerar o código
  input: {
    path: 'http://localhost:3333/docs/json',
  },

  // 🔹 Diretório onde os arquivos gerados serão salvos
  output: {
    path: OUTPUT_PATH,
    clean: true,
  },

  hooks: {
    done: [
      'pnpm fix:kubb-imports',
      'pnpm fix:for-each-to-for-of',
      `biome lint --write --unsafe ${OUTPUT_PATH}`,
    ],
  },

  plugins: [
    // 🔹 Processa a OpenAPI e prepara os dados para os outros plugins
    pluginOas(),

    pluginClient({
      client: 'fetch',
      importPath: '@/http/client',
      // paramsType: 'object',
      // baseURL: env.API_URL,
    }),

    // 🔹 Gera automaticamente os tipos TypeScript baseados nos schemas da API
    pluginTs({
      // 🔹 Diretório onde os tipos TypeScript serão salvos
      output: {
        path: './types',
        barrelType: 'all',
      },

      // 🔹 Adiciona `Type` ao final dos tipos gerados
      transformers: {
        name: (name, type) => {
          return `${name}Type`
        },
      },

      // 🔹 Agrupa os arquivos em pastas separadas com base no nome do caminho
      group: {
        type: 'path',
      },

      // 🔹 Adiciona `Enum` ao final dos tipos enumerados
      enumSuffix: 'Enum',

      // 🔹 Campos desconhecidos serão tratados como `unknown`
      unknownType: 'unknown',
    }),

    pluginZod({
      // 🔹 Diretório onde os schemas Zod serão salvos,
      output: {
        path: './zod',
        barrelType: 'all',
      },

      group: {
        type: 'path',
      },

      exclude: [
        {
          // 🔹 Exclui schemas que contenham `path` no nome
          type: 'path',

          // 🔹 Exclui schemas que contenham `api` no nome
          pattern: 'api',
        },
      ],

      // 🔹 Gera schemas já tipados para serem inferidos no TypeScript
      typed: true,

      // 🔹 Trata datas como strings (ISO 8601) em vez de objetos Date
      dateType: 'stringOffset',

      // 🔹 Campos desconhecidos serão tratados como `unknown`
      unknownType: 'unknown',

      // 🔹 Define que os schemas importarão `zod` para validação
      importPath: 'zod',
    }),
  ],
})
// pluginReactQuery({
//   output: {
//     path: './hooks', // 🔹 Diretório onde os hooks do React Query serão salvos
//     barrelType: 'all',
//   },
//   group: {
//     type: 'tag',
//     name: ({ group }) => `${group}Hooks`, // 🔹 Nomeia os arquivos como `NomeDaTagHooks.ts`
//   },
//   client: {
//     baseURL: 'https://fakerestapi.azurewebsites.net', // 🔹 Define a baseURL para as requisições HTTP
//     // importPath: "../../../kubb/client.ts", // 🔹 Importa client personalizado
//     dataReturnType: 'full', // 🔹 Retorna o objeto completo da resposta (incluindo headers e status)
//   },
//   mutation: {
//     methods: ['post', 'put', 'delete'], // 🔹 Gera hooks `useMutation()` para métodos POST, PUT e DELETE
//   },
//   query: {
//     methods: ['get'], // 🔹 Gera hooks `useQuery()` apenas para chamadas GET
//     importPath: '@tanstack/react-query', // 🔹 Importa o React Query do pacote correto
//   },
//   suspense: {
//     enabled: false, // 👈 Aqui garante que NÃO será gerado useSuspenseQuery
//   },
//   // infinite: {
//   //   queryParam: "next_page", // 🔹 Define o parâmetro da próxima página para `useInfiniteQuery()`
//   //   initialPageParam: 0, // 🔹 Começa a paginação a partir de `0`
//   //   cursorParam: "nextPage", // 🔹 Usa `nextPage` para paginação baseada em cursor
//   // },
// }),
