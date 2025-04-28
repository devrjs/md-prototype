'use server'

import {
  postSessionsPassword,
  postSessionsPasswordMutationRequestSchema,
} from '@/http/kubb'
import { cookies } from 'next/headers'

export async function signInWithEmailAndPassword(data: FormData) {
  const validatedCredentials =
    postSessionsPasswordMutationRequestSchema.safeParse(
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
  } catch (error) {
    console.log(error)

    return {
      success: false,
      message: 'Erro inesperado, tente novamente em alguns minutos.',
      errors: null,
    }
  }

  return { success: true, message: null, errors: null }
}
