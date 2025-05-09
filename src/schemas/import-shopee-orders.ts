import { z } from 'zod'

export const importShopeeOrdersSchema = z.object({
  orderPeriodStartDate: z
    .string()
    .min(1, { message: 'A data de início é obrigatória' }),
  orderPeriodEndDate: z
    .string()
    .min(1, { message: 'A data de fim é obrigatória' }),
  platform: z.string().min(1, { message: 'A plataforma é obrigatória' }),
})
