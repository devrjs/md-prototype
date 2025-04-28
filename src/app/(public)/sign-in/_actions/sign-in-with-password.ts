'use server'

import { postSessionsPassword } from '@/http/kubb'
import { cookies } from 'next/headers'
import { z } from 'zod'

const signInWithEmailAndPasswordSchema = z.object({
  email: z.string().email('E-mail inválido').min(1, 'O e-mail é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

export async function signInWithEmailAndPassword(data: FormData) {
  const validatedCredentials = signInWithEmailAndPasswordSchema.safeParse(
    Object.fromEntries(data)
  )

  if (!validatedCredentials.success) {
    const errors = validatedCredentials.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { email, password } = validatedCredentials.data

  try {
    const { access_token } = await postSessionsPassword({ email, password })

    const cookieStore = await cookies()

    cookieStore.set('accessToken', access_token, {
      path: '/',
      maxAge: 60 * 60 * 4, // 4 hours
    })
  } catch (error: any) {
    console.log(error)

    return {
      success: false,
      message:
        error.message || 'Erro inesperado, tente novamente em alguns minutos.',
      errors: null,
    }
  }

  return { success: true, message: null, errors: null }
}
