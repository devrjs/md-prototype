/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type GetSuppliersIdPathParamsType = {
  /**
   * @type string
   */
  id: string
}

export const getSuppliersId200DocumentTypeEnum = {
  PERSON: 'PERSON',
  COMPANY: 'COMPANY',
} as const

export type GetSuppliersId200DocumentTypeEnumType = (typeof getSuppliersId200DocumentTypeEnum)[keyof typeof getSuppliersId200DocumentTypeEnum]

export const addressesPlatformEnum2 = {
  SHOPEE: 'SHOPEE',
  MERCADO_LIVRE: 'MERCADO_LIVRE',
  TRAY: 'TRAY',
  LOCAL: 'LOCAL',
} as const

export type AddressesPlatformEnum2Type = (typeof addressesPlatformEnum2)[keyof typeof addressesPlatformEnum2]

/**
 * @description Fornecedor obtido com sucesso.
 */
export type GetSuppliersId200Type = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string
   */
  name: string
  /**
   * @type string
   */
  phone: string
  /**
   * @type string
   */
  phone_2: string | null
  /**
   * @type string
   */
  document_type: GetSuppliersId200DocumentTypeEnumType
  /**
   * @type string
   */
  document: string
  /**
   * @type string
   */
  document_2: string | null
  /**
   * @type string, email
   */
  email: string | null
  /**
   * @type string
   */
  state_registration: string | null
  /**
   * @type boolean
   */
  tax_free: boolean
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
   * @type number
   */
  entry_number: number
  /**
   * @type string
   */
  person_id: string
  /**
   * @type array
   */
  addresses: {
    /**
     * @type string
     */
    number: string
    /**
     * @type string
     */
    id: string
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
    recipient_name: string
    /**
     * @type string
     */
    recipient_phone: string
    /**
     * @type string
     */
    cep: string
    /**
     * @type string
     */
    street: string
    /**
     * @type string
     */
    complement: string | null
    /**
     * @type string
     */
    neighborhood: string
    /**
     * @type string
     */
    city: string
    /**
     * @type string
     */
    state: string
    /**
     * @type string
     */
    platform: AddressesPlatformEnum2Type
  }[]
}

/**
 * @description Usuário não autenticado.
 */
export type GetSuppliersId401Type = {
  /**
   * @type string
   */
  message: string
}

/**
 * @description Fornecedor não encontrado.
 */
export type GetSuppliersId404Type = {
  /**
   * @type string
   */
  message: string
}

export type GetSuppliersIdQueryResponseType = GetSuppliersId200Type

export type GetSuppliersIdTypeQuery = {
  Response: GetSuppliersId200Type
  PathParams: GetSuppliersIdPathParamsType
  Errors: GetSuppliersId401Type | GetSuppliersId404Type
}