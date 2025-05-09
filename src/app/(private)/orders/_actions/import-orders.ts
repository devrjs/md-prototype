'use server'

import { HTTPError } from '@/errors/http-error'
import { postShopeeOrderImport } from '@/http/kubb'
import { importOrdersSchema } from '@/schemas/import-shopee-orders'

export async function importOrders(formData: FormData) {
  const validatedForm = importOrdersSchema.safeParse(
    Object.fromEntries(formData)
  )

  if (!validatedForm.success) {
    const errors = validatedForm.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { platform, orderPeriodStartDate, orderPeriodEndDate } =
    validatedForm.data

  try {
    if (platform === 'shopee') {
      await postShopeeOrderImport({
        orderPeriodStartDate,
        orderPeriodEndDate,
      })
    }

    if (platform === 'mercado-livre') {
      // TODO: Import Mercado Livre
    }

    if (platform === 'tray') {
      // TODO: Import Tray
    }

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
