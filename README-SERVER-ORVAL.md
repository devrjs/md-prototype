# Adaptação do Orval para o Servidor

## Visão Geral

Este documento explica as alterações feitas para adaptar o Orval para funcionar tanto no lado do cliente quanto no servidor em uma aplicação Next.js.

## Alterações Realizadas

### 1. Cliente HTTP (`src/http/client.ts`)

- Modificado para detectar automaticamente o ambiente (cliente ou servidor)
- Adicionado suporte para receber cookies como parâmetro no servidor
- Mantida a compatibilidade com o ambiente do navegador

### 2. Configuração do Orval (`orval.config.ts`)

- Adicionado suporte para parâmetros adicionais no mutator
- Configurado para passar cookies do servidor para as requisições HTTP

### 3. Utilitários para o Servidor (`src/http/server-utils.ts`)

- Criada função `getServerCookies()` para obter cookies do servidor
- Incluído exemplo de como usar o cliente HTTP em componentes de servidor

## Como Usar

### No Cliente (Client Components)

Não é necessário fazer alterações no código existente. O cliente HTTP continuará funcionando normalmente em componentes do cliente:

```tsx
// Em um componente de cliente
import { getUsersProfile } from "@/http/orval/api";

// Uso normal, sem alterações
const userData = await getUsersProfile();
```

### No Servidor (Server Components)

Para usar o cliente HTTP em componentes de servidor ou Server Actions:

```tsx
// Em um componente de servidor ou Server Action
import { getUsersProfile } from "@/http/orval/api";
import { getServerCookies } from "@/http/server-utils";

// Obter cookies do servidor de forma assíncrona
const serverCookies = await getServerCookies();

// Passar cookies para a função da API
const userData = await getUsersProfile({}, serverCookies);
```

## Exemplo Prático

Um exemplo completo foi criado em `src/app/(server-example)/page.tsx` demonstrando como usar o cliente HTTP adaptado em um componente de servidor.

## Regenerando o Código do Orval

Se você precisar regenerar o código do Orval, execute:

```bash
npx orval
```

As configurações atualizadas garantirão que o código gerado seja compatível com o servidor.
