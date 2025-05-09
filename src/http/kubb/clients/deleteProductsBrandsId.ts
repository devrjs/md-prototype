/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@/http/client'
import type { RequestConfig, ResponseErrorConfig } from '@/http/client'
import type {
  DeleteProductsBrandsIdMutationResponseType,
  DeleteProductsBrandsIdPathParamsType,
  DeleteProductsBrandsId401Type,
  DeleteProductsBrandsId404Type,
} from '../types/products/DeleteProductsBrandsIdType'

function getDeleteProductsBrandsIdUrl(id: DeleteProductsBrandsIdPathParamsType['id']) {
  return `http://localhost:3333/products/brands/${id}` as const
}

/**
 * @description Esta rota requer autenticação via JWT (JSON Web Token) para garantir a segurança do acesso. Permite a remoção permanente de uma marca específica do sistema através do seu identificador único (ID). Antes da exclusão, o sistema verifica se a marca não está vinculada a nenhum produto ativo para evitar inconsistências no banco de dados. A operação é irreversível, portanto, recomenda-se cautela ao utilizá-la. É importante notar que o histórico de transações e registros relacionados à marca permanecerão preservados para fins de auditoria, mesmo após sua remoção.
 * @summary Remove uma marca específica.
 * {@link /products/brands/:id}
 */
export async function deleteProductsBrandsId(id: DeleteProductsBrandsIdPathParamsType['id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    DeleteProductsBrandsIdMutationResponseType,
    ResponseErrorConfig<DeleteProductsBrandsId401Type | DeleteProductsBrandsId404Type>,
    unknown
  >({ method: 'DELETE', url: getDeleteProductsBrandsIdUrl(id).toString(), ...requestConfig })
  return res.data
}