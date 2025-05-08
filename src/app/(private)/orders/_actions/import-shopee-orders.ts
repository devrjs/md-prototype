import { HTTPError } from '@/errors/http-error'
import { postShopeeOrderImport } from '@/http/kubb'
import { importShopeeOrdersSchema } from '@/schemas/import-shopee-orders'

export async function importShopeeOrders(formData: FormData) {
  const validatedCredentials = importShopeeOrdersSchema.safeParse(
    Object.fromEntries(formData)
  )

  // if (!validatedCredentials.success) {
  //   const errors = validatedCredentials.error.flatten().fieldErrors

  //   return { success: false, message: null, errors }
  // }

  // const { orderPeriodStartDate, orderPeriodEndDate } = validatedCredentials.data

  try {
    const orderPeriodStartDate = '2023-01-01'
    const orderPeriodEndDate = '2023-01-01'

    await postShopeeOrderImport({
      orderPeriodStartDate,
      orderPeriodEndDate,
    })

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
