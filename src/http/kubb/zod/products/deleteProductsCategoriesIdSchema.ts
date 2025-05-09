/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { ToZod } from '@kubb/plugin-zod/utils'
import type {
  DeleteProductsCategoriesIdPathParamsType,
  DeleteProductsCategoriesId200Type,
  DeleteProductsCategoriesId401Type,
  DeleteProductsCategoriesId404Type,
  DeleteProductsCategoriesIdMutationResponseType,
} from '../../types/products/DeleteProductsCategoriesIdType'
import { z } from 'zod'

export const deleteProductsCategoriesIdPathParamsSchema = z.object({
  id: z.string(),
}) as unknown as ToZod<DeleteProductsCategoriesIdPathParamsType>

/**
 * @description Categoria deletada com sucesso.
 */
export const deleteProductsCategoriesId200Schema = z
  .enum(['null'])
  .describe('Categoria deletada com sucesso.')
  .nullable() as unknown as ToZod<DeleteProductsCategoriesId200Type>

/**
 * @description Usuário não autenticado.
 */
export const deleteProductsCategoriesId401Schema = z
  .object({
    message: z.string(),
  })
  .describe('Usuário não autenticado.') as unknown as ToZod<DeleteProductsCategoriesId401Type>

/**
 * @description Categoria não encontrado.
 */
export const deleteProductsCategoriesId404Schema = z
  .object({
    message: z.string(),
  })
  .describe('Categoria não encontrado.') as unknown as ToZod<DeleteProductsCategoriesId404Type>

export const deleteProductsCategoriesIdMutationResponseSchema = z.lazy(
  () => deleteProductsCategoriesId200Schema,
) as unknown as ToZod<DeleteProductsCategoriesIdMutationResponseType>