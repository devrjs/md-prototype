/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { ToZod } from '@kubb/plugin-zod/utils'
import type { GetProductsBrands200Type, GetProductsBrands401Type, GetProductsBrandsQueryResponseType } from '../../types/products/GetProductsBrandsType'
import { z } from 'zod'

/**
 * @description Marcas de produtos obtidas com sucesso.
 */
export const getProductsBrands200Schema = z
  .array(
    z.object({
      id: z.string(),
      name: z.string(),
      reference_code: z.string(),
    }),
  )
  .describe('Marcas de produtos obtidas com sucesso.') as unknown as ToZod<GetProductsBrands200Type>

/**
 * @description Usuário não autenticado.
 */
export const getProductsBrands401Schema = z
  .object({
    message: z.string(),
  })
  .describe('Usuário não autenticado.') as unknown as ToZod<GetProductsBrands401Type>

export const getProductsBrandsQueryResponseSchema = z.lazy(() => getProductsBrands200Schema) as unknown as ToZod<GetProductsBrandsQueryResponseType>