/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export const getProductsAttributesValuesQueryParamsOrderByEnum = {
  desc: 'desc',
  asc: 'asc',
} as const

export type GetProductsAttributesValuesQueryParamsOrderByEnumType =
  (typeof getProductsAttributesValuesQueryParamsOrderByEnum)[keyof typeof getProductsAttributesValuesQueryParamsOrderByEnum]

export type GetProductsAttributesValuesQueryParamsType = {
  /**
   * @type string
   */
  productAttributeNameId: string
  /**
   * @default 10
   * @type number | undefined
   */
  perPage?: number
  /**
   * @default 0
   * @type number | undefined
   */
  pageIndex?: number
  /**
   * @default "desc"
   * @type string | undefined
   */
  orderBy?: GetProductsAttributesValuesQueryParamsOrderByEnumType
  /**
   * @type string | undefined
   */
  attributeValue?: string
}

/**
 * @description Valores dos atributos dos produtos obtidos com sucesso.
 */
export type GetProductsAttributesValues200Type = {
  /**
   * @type number
   */
  totalCount: number
  /**
   * @type number
   */
  pageCount: number
  /**
   * @type array
   */
  productAttributeValues: {
    /**
     * @type string
     */
    id: string
    /**
     * @type string
     */
    value: string
  }[]
}

/**
 * @description Usuário não autenticado.
 */
export type GetProductsAttributesValues401Type = {
  /**
   * @type string
   */
  message: string
}

export type GetProductsAttributesValuesQueryResponseType = GetProductsAttributesValues200Type

export type GetProductsAttributesValuesTypeQuery = {
  Response: GetProductsAttributesValues200Type
  QueryParams: GetProductsAttributesValuesQueryParamsType
  Errors: GetProductsAttributesValues401Type
}