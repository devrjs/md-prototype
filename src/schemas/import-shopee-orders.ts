import { z } from 'zod'

export const importShopeeOrdersSchema = z.object({
  orderPeriodStartDate: z.string().min(1, { message: 'A data obrigatória' }),
  orderPeriodEndDate: z.string().min(1, { message: 'A data obrigatória' }),
  platform: z.string().min(1, { message: 'A plataforma é obrigatória' }),
})
