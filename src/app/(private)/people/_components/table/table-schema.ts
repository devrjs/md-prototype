import { type GetCustomers200Type, getCustomers200Schema } from '@/http/kubb'

export const tableSchema = getCustomers200Schema

export type TableItemType = GetCustomers200Type['customers'][0]
