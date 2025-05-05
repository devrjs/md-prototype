import { type GetProducts200Type, getProducts200Schema } from '@/http/kubb'

export const tableSchema = getProducts200Schema

export type TableItemType = GetProducts200Type['products'][0]
