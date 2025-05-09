import { z } from 'zod'

export const importOrdersSchema = z
  .object({
    orderPeriodStartDate: z
      .string()
      .min(1, { message: 'A data é obrigatória.' })
      .refine(
        date => {
          try {
            return new Date(date).toString() !== 'Invalid Date'
          } catch {
            return false
          }
        },
        { message: 'Data inicial inválida' }
      ),
    orderPeriodEndDate: z
      .string()
      .min(1, { message: 'A data obrigatória.' })
      .refine(
        date => {
          try {
            return new Date(date).toString() !== 'Invalid Date'
          } catch {
            return false
          }
        },
        { message: 'Data final inválida' }
      ),
    platform: z.enum(['shopee', 'mercado-livre', 'tray'], {
      errorMap: () => ({ message: 'A plataforma é obrigatória.' }),
    }),
  })
  .refine(
    data => {
      const startDate = new Date(data.orderPeriodStartDate)
      const endDate = new Date(data.orderPeriodEndDate)
      const diffInDays = Math.ceil(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      )
      return diffInDays <= 15 && diffInDays >= 0
    },
    {
      message: 'O período máximo entre as datas deve ser no máximo de 15 dias.',
      path: ['orderPeriodStartDate'],
    }
  )
