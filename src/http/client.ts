import { env } from '@/env'

export type RequestConfig<TData = unknown> = {
  url?: string
  method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE'
  params?: object
  data?: TData | FormData
  responseType?:
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'json'
    | 'text'
    | 'stream'
  signal?: AbortSignal
  headers?: HeadersInit
}

export type ResponseErrorConfig<TData = unknown> = {
  data: TData
  status: number
  statusText: string
}

const client = async <TData, TError = unknown, TVariables = unknown>(
  config: RequestConfig<TVariables>
): Promise<ResponseErrorConfig<TData>> => {
  let token = ''

  if (typeof window !== 'undefined') {
    ;('use client')
    // Get token from cookie manually
    token =
      document.cookie
        .split('; ')
        .find(row => row.startsWith('access_token='))
        ?.split('=')[1] ?? ''
  } else {
    ;('use server')
    // Get token from cookies in server context
    const { cookies } = await import('next/headers')
    const cookieStore = cookies()
    token = (await cookieStore).get('access_token')?.value ?? ''
  }

  const response = await fetch(`${env.API_URL}${config.url}`, {
    method: config.method.toUpperCase(),
    body: JSON.stringify(config.data),
    signal: config.signal,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...config.headers,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw {
      data,
      status: response.status,
      statusText: response.statusText,
      message: data.message || 'Erro na requisição',
    }
  }

  return {
    data,
    status: response.status,
    statusText: response.statusText,
  }
}

export default client
