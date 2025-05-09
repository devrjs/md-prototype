/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

/**
 * @description Variação cadastrada com sucesso.
 */
export type PostProductsVariations201Type = {
  /**
   * @type string
   */
  message: string
}

/**
 * @description Usuário não autenticado.
 */
export type PostProductsVariations401Type = {
  /**
   * @type string
   */
  message: string
}

/**
 * @description Variação já cadastrada.
 */
export type PostProductsVariations409Type = {
  /**
   * @type string
   */
  message: string
}

export type PostProductsVariationsMutationRequestType = {
  /**
   * @pattern ^[cC][^\s-]{8,}$
   * @type string
   */
  product_id: string
  /**
   * @type string | undefined
   */
  barcode?: string
  /**
   * @minLength 1
   * @type string
   */
  name: string
  /**
   * @type number | undefined
   */
  length_in_centimeters?: number
  /**
   * @type number | undefined
   */
  height_in_centimeters?: number
  /**
   * @type number | undefined
   */
  width_in_centimeters?: number
  /**
   * @type number | undefined
   */
  weight_in_grams?: number
  /**
   * @type number
   */
  average_cost: number
  /**
   * @type number
   */
  cost_price: number
  /**
   * @type number
   */
  selling_price: number
  /**
   * @type number | undefined
   */
  suggested_maximum_discount?: number
  /**
   * @type string | undefined, date-time
   */
  promotion_starts_at?: string
  /**
   * @type string | undefined, date-time
   */
  promotion_ends_at?: string
  /**
   * @type string | undefined
   */
  product_storage_location?: string
  /**
   * @type string
   */
  product_condition: string
  /**
   * @type string | undefined, date-time
   */
  product_expiration_date?: string
  /**
   * @type string | undefined, date-time
   */
  warranty_date?: string
  /**
   * @type number
   */
  current_stock: number
  /**
   * @type number
   */
  minimum_stock_level: number
  /**
   * @type number
   */
  products_in_review: number
  /**
   * @type boolean | undefined
   */
  update_stock?: boolean
  /**
   * @type boolean | undefined
   */
  track_inventory?: boolean
  /**
   * @type boolean | undefined
   */
  is_available?: boolean
}

export type PostProductsVariationsMutationResponseType = PostProductsVariations201Type

export type PostProductsVariationsTypeMutation = {
  Response: PostProductsVariations201Type
  Request: PostProductsVariationsMutationRequestType
  Errors: PostProductsVariations401Type | PostProductsVariations409Type
}