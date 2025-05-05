import { z } from 'zod'

export const registerWithEmailAndPasswordSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  email: z.string().email('E-mail inválido').min(1, 'O e-mail é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})
