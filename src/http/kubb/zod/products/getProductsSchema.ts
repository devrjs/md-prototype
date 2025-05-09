/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { ToZod } from '@kubb/plugin-zod/utils'
import type { GetProductsQueryParamsType, GetProducts200Type, GetProducts401Type, GetProductsQueryResponseType } from '../../types/products/GetProductsType'
import { z } from 'zod'

export const getProductsQueryParamsSchema = z
  .object({
    perPage: z.number().default(10),
    pageIndex: z.number().min(1).default(1),
    orderBy: z.enum(['desc', 'asc']).default('desc'),
    productName: z.string().optional(),
  })
  .optional() as unknown as ToZod<GetProductsQueryParamsType>

/**
 * @description Produtos obtidos com sucesso.
 */
export const getProducts200Schema = z
  .object({
    totalCount: z.number(),
    pageCount: z.number(),
    products: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        ncm: z.number().nullable(),
      }),
    ),
  })
  .describe('Produtos obtidos com sucesso.') as unknown as ToZod<GetProducts200Type>

/**
 * @description Usuário não autenticado.
 */
export const getProducts401Schema = z
  .object({
    message: z.string(),
  })
  .describe('Usuário não autenticado.') as unknown as ToZod<GetProducts401Type>

export const getProductsQueryResponseSchema = z.lazy(() => getProducts200Schema) as unknown as ToZod<GetProductsQueryResponseType>