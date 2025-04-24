function getBody<T>(c: Response | Request): Promise<T> {
  const contentType = c.headers.get("content-type");

  if (contentType?.indexOf("application/json") !== -1) {
    return c.json();
  }

  return c.text() as Promise<T>;
}

async function getHeaders(
  headers?: HeadersInit,
  cookies?: string
): Promise<HeadersInit> {
  const baseHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(headers || {}),
  };

  // Get token from cookie
  let token: string | undefined;

  // Check if we're in a browser environment
  if (typeof document !== "undefined") {
    // Client-side: Get token from document.cookie
    token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];
  } else if (cookies) {
    // Server-side: Parse cookies string passed as parameter
    token = cookies
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];
  }

  // Adicionar o token de autenticação se existir
  if (token) {
    return {
      ...baseHeaders,
      Authorization: `Bearer ${token}`,
    };
  }

  return baseHeaders;
}

export async function http<T>(
  path: string,
  options: RequestInit,
  cookies?: string
): Promise<T> {
  // Define o tipo para o segundo parâmetro para uso com o Orval
  type SecondParameter<T extends (...args: any) => any> = T extends (
    arg1: any,
    arg2: infer P,
    ...args: any[]
  ) => any
    ? P
    : never;
  const requestHeaders = await getHeaders(options.headers, cookies);

  const url = new URL(path, "http://localhost:3333");

  const request = new Request(url, {
    ...options,
    headers: requestHeaders,
  });

  // Use native fetch for both client and server environments
  const response = await fetch(request);

  if (response.ok) {
    const data = await getBody<T>(response);
    return data as T;
  }

  return Promise.reject(response);
}
