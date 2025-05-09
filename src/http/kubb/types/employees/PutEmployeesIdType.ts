/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type PutEmployeesIdPathParamsType = {
  /**
   * @type string
   */
  id: string
}

export const putEmployeesId200Enum = {
  null: 'null',
} as const

export type PutEmployeesId200EnumType = (typeof putEmployeesId200Enum)[keyof typeof putEmployeesId200Enum]

/**
 * @description Colaborador atualizado com sucesso.
 */
export type PutEmployeesId200Type = PutEmployeesId200EnumType | null

/**
 * @description Usuário não autenticado.
 */
export type PutEmployeesId401Type = {
  /**
   * @type string
   */
  message: string
}

/**
 * @description Colaborador não encontrado.
 */
export type PutEmployeesId404Type = {
  /**
   * @type string
   */
  message: string
}

export const putEmployeesIdMutationRequestDocumentTypeEnum = {
  PERSON: 'PERSON',
  COMPANY: 'COMPANY',
} as const

export type PutEmployeesIdMutationRequestDocumentTypeEnumType =
  (typeof putEmployeesIdMutationRequestDocumentTypeEnum)[keyof typeof putEmployeesIdMutationRequestDocumentTypeEnum]

export const putEmployeesIdMutationRequestGenderEnum = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
} as const

export type PutEmployeesIdMutationRequestGenderEnumType = (typeof putEmployeesIdMutationRequestGenderEnum)[keyof typeof putEmployeesIdMutationRequestGenderEnum]

export type PutEmployeesIdMutationRequestType = {
  /**
   * @minLength 1
   * @type string
   */
  name: string
  /**
   * @minLength 1
   * @type string
   */
  phone: string
  /**
   * @type string | undefined
   */
  phone_2?: string
  /**
   * @type string
   */
  document_type: PutEmployeesIdMutationRequestDocumentTypeEnumType
  /**
   * @minLength 1
   * @type string
   */
  document: string
  /**
   * @type string | undefined
   */
  document_2?: string
  /**
   * @minLength 1
   * @type string, email
   */
  email: string
  /**
   * @type string | undefined
   */
  state_registration?: string
  /**
   * @type boolean | undefined
   */
  tax_free?: boolean
  /**
   * @type string | undefined
   */
  gender?: PutEmployeesIdMutationRequestGenderEnumType
  /**
   * @type string | undefined, date-time
   */
  birth_date?: string
  /**
   * @minLength 1
   * @pattern ^[cC][^\s-]{8,}$
   * @type string
   */
  address_id: string
  /**
   * @minLength 1
   * @type string
   */
  recipient_name: string
  /**
   * @minLength 1
   * @type string
   */
  recipient_phone: string
  /**
   * @minLength 1
   * @type string
   */
  cep: string
  /**
   * @minLength 1
   * @type string
   */
  street: string
  /**
   * @minLength 1
   * @type string
   */
  number: string
  /**
   * @type string | undefined
   */
  complement?: string
  /**
   * @minLength 1
   * @type string
   */
  neighborhood: string
  /**
   * @minLength 1
   * @type string
   */
  city: string
  /**
   * @minLength 1
   * @type string
   */
  state: string
}

export type PutEmployeesIdMutationResponseType = PutEmployeesId200Type

export type PutEmployeesIdTypeMutation = {
  Response: PutEmployeesId200Type
  Request: PutEmployeesIdMutationRequestType
  PathParams: PutEmployeesIdPathParamsType
  Errors: PutEmployeesId401Type | PutEmployeesId404Type
}