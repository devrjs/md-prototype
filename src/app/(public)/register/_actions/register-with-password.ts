'use server'

import { HTTPError } from '@/errors/http-error'
import { postUsers } from '@/http/kubb'
import { registerWithEmailAndPasswordSchema } from '@/schemas/register-with-email-and-password-schema'

export async function registerWithEmailAndPassword(data: FormData) {
  const validatedCredentials = registerWithEmailAndPasswordSchema.safeParse(
    Object.fromEntries(data)
  )

  if (!validatedCredentials.success) {
    const errors = validatedCredentials.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { name, email, password } = validatedCredentials.data

  try {
    await postUsers({ name, email, password })

    return { success: true, message: null, errors: null }
  } catch (error) {
    if (error instanceof HTTPError) {
      return {
        success: false,
        message: error.message,
        errors: null,
      }
    }

    return {
      success: false,
      message: 'Erro inesperado, tente novamente em alguns minutos.',
      errors: null,
    }
  }
}
