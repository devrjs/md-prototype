/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export const getOrdersQueryParamsOrderByEnum = {
  asc: 'asc',
  desc: 'desc',
} as const

export type GetOrdersQueryParamsOrderByEnumType = (typeof getOrdersQueryParamsOrderByEnum)[keyof typeof getOrdersQueryParamsOrderByEnum]

export const getOrdersQueryParamsStatusEnum = {
  PROCESSED: 'PROCESSED',
  CANCELLED: 'CANCELLED',
} as const

export type GetOrdersQueryParamsStatusEnumType = (typeof getOrdersQueryParamsStatusEnum)[keyof typeof getOrdersQueryParamsStatusEnum]

export type GetOrdersQueryParamsType = {
  /**
   * @default 10
   * @type number | undefined
   */
  perPage?: number
  /**
   * @minLength 1
   * @default 1
   * @type number | undefined
   */
  pageIndex?: number
  /**
   * @default "desc"
   * @type string | undefined
   */
  orderBy?: GetOrdersQueryParamsOrderByEnumType
  /**
   * @type string | undefined
   */
  status?: GetOrdersQueryParamsStatusEnumType
  /**
   * @type string | undefined
   */
  orderId?: string
  /**
   * @type string | undefined
   */
  platformOrderId?: string
  /**
   * @type string | undefined, date-time
   */
  timeFrom?: string
  /**
   * @type string | undefined, date-time
   */
  timeTo?: string
}

export const platformOrderDetailsPlatformNameEnum = {
  SHOPEE: 'SHOPEE',
  MERCADO_LIVRE: 'MERCADO_LIVRE',
  TRAY: 'TRAY',
  LOCAL: 'LOCAL',
} as const

export type PlatformOrderDetailsPlatformNameEnumType = (typeof platformOrderDetailsPlatformNameEnum)[keyof typeof platformOrderDetailsPlatformNameEnum]

/**
 * @description Default Response
 */
export type GetOrders200Type = {
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
  orders: {
    /**
     * @type string
     */
    id: string
    /**
     * @type string
     */
    status: string
    /**
     * @type string
     */
    shipping_carrier: string
    /**
     * @type string, date-time
     */
    order_placed_at: string
    /**
     * @type string, date-time
     */
    created_at: string
    /**
     * @type string, date-time
     */
    updated_at: string
    /**
     * @type object
     */
    platform_order_details: {
      /**
       * @type string
       */
      platform_name: PlatformOrderDetailsPlatformNameEnumType
      /**
       * @type string
       */
      external_order_id: string
    } | null
  }[]
}

/**
 * @description Usuário não autenticado.
 */
export type GetOrders401Type = {
  /**
   * @type string
   */
  message: string
}

export type GetOrdersQueryResponseType = GetOrders200Type

export type GetOrdersTypeQuery = {
  Response: GetOrders200Type
  QueryParams: GetOrdersQueryParamsType
  Errors: GetOrders401Type
}