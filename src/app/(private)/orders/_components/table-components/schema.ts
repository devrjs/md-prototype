import { type GetOrders200Type, getOrders200Schema } from '@/http/kubb'
import { z } from 'zod'

// Schema para validação dos dados da tabela
export const schema = getOrders200Schema

// Tipo derivado do schema para uso nos componentes
export type OrderItem = GetOrders200Type['orders'][0]
