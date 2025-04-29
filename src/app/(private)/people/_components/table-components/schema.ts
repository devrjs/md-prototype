import { z } from 'zod'

// Schema para validação dos dados da tabela
export const schema = z.object({
  id: z.number(),
  header: z.string(),
  type: z.string(),
  status: z.string(),
  target: z.string(),
  limit: z.string(),
  reviewer: z.string(),
})

// Tipo derivado do schema para uso nos componentes
export type OrderItem = z.infer<typeof schema>
