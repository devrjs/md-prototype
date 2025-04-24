function getBody<T>(c: Response | Request): Promise<T> {
  const contentType = c.headers.get("content-type");

  if (contentType?.indexOf("application/json") !== -1) {
    return c.json();
  }

  return c.text() as Promise<T>;
}

async function getHeaders(headers?: HeadersInit): Promise<HeadersInit> {
  const baseHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(headers || {}),
  };

  if (typeof window !== "undefined") {
    ("use client");
    // Get token from cookie manually
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];

    // Adicionar o token de autenticação se existir
    if (token) {
      return {
        ...baseHeaders,
        Authorization: `Bearer ${token}`,
      };
    }

    return baseHeaders;
  } else {
    ("use server");
    // Get token from cookies in server context
    const { cookies } = await import("next/headers");
    const cookieStore = cookies();
    const token = (await cookieStore).get("access_token")?.value;

    // Adicionar o token de autenticação se existir
    if (token) {
      return {
        ...baseHeaders,
        Authorization: `Bearer ${token}`,
      };
    }

    return baseHeaders;
  }
}

export async function http<T>(path: string, options: RequestInit): Promise<T> {
  const requestHeaders = await getHeaders(options.headers);

  const url = new URL(path, "http://localhost:3333");

  const request = new Request(url, {
    ...options,
    headers: requestHeaders,
  });

  const response = await fetch(request);

  if (response.ok) {
    const data = await getBody<T>(response);
    return data as T;
  }

  return Promise.reject(response);
}
