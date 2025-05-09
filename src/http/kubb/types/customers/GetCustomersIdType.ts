/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type GetCustomersIdPathParamsType = {
  /**
   * @type string
   */
  id: string
}

export const getCustomersId200DocumentTypeEnum = {
  PERSON: 'PERSON',
  COMPANY: 'COMPANY',
} as const

export type GetCustomersId200DocumentTypeEnumType = (typeof getCustomersId200DocumentTypeEnum)[keyof typeof getCustomersId200DocumentTypeEnum]

export const getCustomersId200GenderEnum = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
} as const

export type GetCustomersId200GenderEnumType = (typeof getCustomersId200GenderEnum)[keyof typeof getCustomersId200GenderEnum]

export const addressesPlatformEnum = {
  SHOPEE: 'SHOPEE',
  MERCADO_LIVRE: 'MERCADO_LIVRE',
  TRAY: 'TRAY',
  LOCAL: 'LOCAL',
} as const

export type AddressesPlatformEnumType = (typeof addressesPlatformEnum)[keyof typeof addressesPlatformEnum]

/**
 * @description Cliente obtido com sucesso.
 */
export type GetCustomersId200Type = {
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
  document_type: GetCustomersId200DocumentTypeEnumType
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
  gender: GetCustomersId200GenderEnumType | null
  /**
   * @type string, date-time
   */
  birth_date: string | null
  /**
   * @type boolean
   */
  problematic: boolean
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
    id: string
    /**
     * @type string
     */
    number: string
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
    platform: AddressesPlatformEnumType
  }[]
}

/**
 * @description Usuário não autenticado.
 */
export type GetCustomersId401Type = {
  /**
   * @type string
   */
  message: string
}

/**
 * @description Cliente não encontrado.
 */
export type GetCustomersId404Type = {
  /**
   * @type string
   */
  message: string
}

export type GetCustomersIdQueryResponseType = GetCustomersId200Type

export type GetCustomersIdTypeQuery = {
  Response: GetCustomersId200Type
  PathParams: GetCustomersIdPathParamsType
  Errors: GetCustomersId401Type | GetCustomersId404Type
}