import { type GetOrders200Type, getOrders200Schema } from '@/http/kubb'

export const tableSchema = getOrders200Schema

export type TableType = GetOrders200Type['orders'][0]
