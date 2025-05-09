/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type GetOrdersIdPathParamsType = {
  /**
   * @type string
   */
  id: string
}

export const platformOrderDetailsPlatformNameEnum2 = {
  SHOPEE: 'SHOPEE',
  MERCADO_LIVRE: 'MERCADO_LIVRE',
  TRAY: 'TRAY',
  LOCAL: 'LOCAL',
} as const

export type PlatformOrderDetailsPlatformNameEnum2Type = (typeof platformOrderDetailsPlatformNameEnum2)[keyof typeof platformOrderDetailsPlatformNameEnum2]

/**
 * @description Detalhes do pedido obtidos com sucesso.
 */
export type GetOrdersId200Type = {
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
   * @type string
   */
  user_id: string
  /**
   * @type string
   */
  customer_id: string
  /**
   * @type string
   */
  address_id: string
  /**
   * @type array
   */
  items: {
    /**
     * @type string
     */
    id: string
    /**
     * @type string
     */
    variation_sku: string
    /**
     * @type string
     */
    name: string
    /**
     * @type number
     */
    quantity: number
    /**
     * @type number
     */
    unit_price: number
    /**
     * @type number
     */
    unit_price_with_discount: number
    /**
     * @type string, date-time
     */
    created_at: string
    /**
     * @type string, date-time
     */
    updated_at: string
    /**
     * @type string
     */
    order_id: string
    /**
     * @type string
     */
    product_variation_id: string | null
  }[]
  /**
   * @type object
   */
  platform_order_details: {
    /**
     * @type string
     */
    platform_name: PlatformOrderDetailsPlatformNameEnum2Type
    /**
     * @type string
     */
    external_order_id: string
  } | null
  /**
   * @type object
   */
  order_payment: {
    /**
     * @type string
     */
    id: string
    /**
     * @type string
     */
    buyer_payment_method: string
    /**
     * @type number
     */
    shipping_cost: number
    /**
     * @type number
     */
    total_order_price: number
    /**
     * @type number
     */
    seller_discount: number
    /**
     * @type number
     */
    platform_discount: number
    /**
     * @type number
     */
    platform_coins: number
    /**
     * @type number
     */
    buyer_paid_amount: number
    /**
     * @type number
     */
    total_platform_fee: number
    /**
     * @type number
     */
    total_platform_fee_with_discounts: number
    /**
     * @type number
     */
    amount_received_from_sale: number
    /**
     * @type string, date-time
     */
    created_at: string
    /**
     * @type string, date-time
     */
    updated_at: string
  } | null
}

/**
 * @description Usuário não autenticado.
 */
export type GetOrdersId401Type = {
  /**
   * @type string
   */
  message: string
}

/**
 * @description Pedido não encontrado.
 */
export type GetOrdersId404Type = {
  /**
   * @type string
   */
  message: string
}

export type GetOrdersIdQueryResponseType = GetOrdersId200Type

export type GetOrdersIdTypeQuery = {
  Response: GetOrdersId200Type
  PathParams: GetOrdersIdPathParamsType
  Errors: GetOrdersId401Type | GetOrdersId404Type
}