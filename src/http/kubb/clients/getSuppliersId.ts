/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@/http/client'
import type { RequestConfig, ResponseErrorConfig } from '@/http/client'
import type {
  GetSuppliersIdQueryResponseType,
  GetSuppliersIdPathParamsType,
  GetSuppliersId401Type,
  GetSuppliersId404Type,
} from '../types/suppliers/GetSuppliersIdType'

function getGetSuppliersIdUrl(id: GetSuppliersIdPathParamsType['id']) {
  return `http://localhost:3333/suppliers/${id}` as const
}

/**
 * @summary Retorna as informações de um fornecedor específico.
 * {@link /suppliers/:id}
 */
export async function getSuppliersId(id: GetSuppliersIdPathParamsType['id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetSuppliersIdQueryResponseType, ResponseErrorConfig<GetSuppliersId401Type | GetSuppliersId404Type>, unknown>({
    method: 'GET',
    url: getGetSuppliersIdUrl(id).toString(),
    ...requestConfig,
  })
  return res.data
}