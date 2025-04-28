export class HTTPError extends Error {
  constructor(
    public data: { message: string },
    public status: number,
    public statusText: string,
    message?: string
  ) {
    super(message || 'Erro na requisição')
    this.name = 'HttpError'
  }
}
