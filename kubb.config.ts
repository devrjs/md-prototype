import { defineConfig } from '@kubb/core'
import { pluginClient } from '@kubb/plugin-client'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTs } from '@kubb/plugin-ts'
import { pluginZod } from '@kubb/plugin-zod'

const OUTPUT_PATH = './src/http/kubb'

export default defineConfig({
  input: {
    path: 'http://localhost:3333/docs/json', // 🔹 URL do Swagger JSON (OpenAPI) para gerar o código
  },
  output: {
    path: OUTPUT_PATH, // 🔹 Diretório onde os arquivos gerados serão salvos
    clean: true,
  },
  hooks: {
    done: [`biome lint --write --unsafe ${OUTPUT_PATH}`],
  },
  plugins: [
    pluginOas(), // 🔹 Processa a OpenAPI e prepara os dados para os outros plugins
    // 🔹 Gera automaticamente os tipos TypeScript baseados nos schemas da API
    pluginClient({
      client: 'fetch',
      // paramsType: 'object',
      importPath: '@/http/client',
      // baseURL: 'http://localhost:3333',
    }),
    pluginTs({
      output: {
        path: './types', // 🔹 Diretório onde os tipos TypeScript serão salvos
        barrelType: 'all',
      },
      transformers: {
        name: (name, type) => {
          return `${name}Type` // 🔹 Adiciona `Type` ao final dos tipos gerados
        },
      },
      group: {
        type: 'tag',
        name: ({ group }) => `${group}Types`,
      },
      enumSuffix: 'Enum', // 🔹 Adiciona `Enum` ao final dos tipos enumerados
      unknownType: 'unknown', // 🔹 Campos desconhecidos serão tratados como `unknown`
    }),
    pluginZod({
      output: {
        path: './zod', // 🔹 Diretório onde os schemas Zod serão salvos,
        barrelType: 'all',
      },
      group: {
        type: 'path',
      },
      exclude: [
        {
          type: 'path', // 🔹 Exclui schemas que contenham `path` no nome
          pattern: 'api', // 🔹 Exclui schemas que contenham `api` no nome
        },
      ],
      typed: true, // 🔹 Gera schemas já tipados para serem inferidos no TypeScript
      dateType: 'stringOffset', // 🔹 Trata datas como strings (ISO 8601) em vez de objetos Date
      unknownType: 'unknown', // 🔹 Campos desconhecidos serão tratados como `unknown`
      importPath: 'zod', // 🔹 Define que os schemas importarão `zod` para validação
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

// pluginHookCustom({
//   output: {
//     path: "./hook-custom",
//     barrelType: "all",
//   },
//   group: {
//     type: "tag",
//     name: ({ group }) => `${group}HookCustom`,
//   },
//   transformers: {
//     name: (name) => {
//       return `useCustom${name.charAt(0).toUpperCase()}${name.slice(1)}`;
//     },
//   },
// }),
