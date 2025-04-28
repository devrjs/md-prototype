import { z } from 'zod'

export const signInWithEmailAndPasswordSchema = z.object({
  email: z.string().email('E-mail inválido').min(1, 'O e-mail é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})
