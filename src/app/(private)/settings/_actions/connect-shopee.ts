'use server'

import { HTTPError } from '@/errors/http-error'
import { postShopeeAuthToken } from '@/http/kubb'
import { connectShopeeSchema } from '@/schemas/connect-shopee-schema'

export async function connectShopee(formData: FormData) {
  const validatedCredentials = connectShopeeSchema.safeParse(
    Object.fromEntries(formData)
  )

  if (!validatedCredentials.success) {
    const errors = validatedCredentials.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { code, shopId } = validatedCredentials.data

  try {
    await postShopeeAuthToken({ code, shopId })

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
