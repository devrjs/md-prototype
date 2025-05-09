/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@/http/client'
import type { RequestConfig, ResponseErrorConfig } from '@/http/client'
import type { GetShopeeAuthUrlQueryResponseType, GetShopeeAuthUrl401Type } from '../types/shopee/GetShopeeAuthUrlType'

function getGetShopeeAuthUrlUrl() {
  return 'http://localhost:3333/shopee/auth/url' as const
}

/**
 * @description Gera uma URL de autenticação para integração com a API da Shopee. Esta URL é necessária para obter as credenciais de acesso e permitir que o sistema se conecte com a plataforma Shopee.
 * @summary Retorna a URL para autenticação do Shopee.
 * {@link /shopee/auth/url}
 */
export async function getShopeeAuthUrl(config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<GetShopeeAuthUrlQueryResponseType, ResponseErrorConfig<GetShopeeAuthUrl401Type>, unknown>({
    method: 'GET',
    url: getGetShopeeAuthUrlUrl().toString(),
    ...requestConfig,
  })
  return res.data
}