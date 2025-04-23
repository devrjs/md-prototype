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

        mutator: {
          path: "./src/http/client.ts",
          name: "http",
        },
      },
    },
  },
});
