import { z } from 'zod'

export const connectShopeeSchema = z.object({
  shopId: z.coerce.number().int().min(1, 'O shopId é obrigatório'),
  code: z.string().min(1, 'O code é obrigatório'),
})
