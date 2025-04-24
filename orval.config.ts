import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "http://localhost:3333/docs/json",
    output: {
      target: "./src/http/orval/api.ts",
      client: "react-query",
      httpClient: "fetch",
      clean: true,
      baseUrl: "http://localhost:3333/",
      // mode: "split",

      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
        operations: {
          // Adiciona o parâmetro cookies para todas as operações
          // para permitir o uso no servidor
          operationName: (operation) => {
            return operation;
          },
        },
        mutator: {
          path: "./src/http/client.ts",
          name: "http",
          // Adiciona o parâmetro de cookies para o mutator
          // para permitir o uso no servidor
          additionalArgs: ["cookies?: string"],
        },
      },
    },
  },
});
