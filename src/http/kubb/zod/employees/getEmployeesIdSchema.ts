/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { ToZod } from '@kubb/plugin-zod/utils'
import type {
  GetEmployeesIdPathParamsType,
  GetEmployeesId200Type,
  GetEmployeesId401Type,
  GetEmployeesId404Type,
  GetEmployeesIdQueryResponseType,
} from '../../types/employees/GetEmployeesIdType'
import { z } from 'zod'

export const getEmployeesIdPathParamsSchema = z.object({
  id: z.string(),
}) as unknown as ToZod<GetEmployeesIdPathParamsType>

/**
 * @description Colaborador obtido com sucesso.
 */
export const getEmployeesId200Schema = z
  .object({
    id: z.string(),
    name: z.string(),
    phone: z.string(),
    phone_2: z.string().nullable(),
    document_type: z.enum(['PERSON', 'COMPANY']),
    document: z.string(),
    document_2: z.string().nullable(),
    email: z.string().email().nullable(),
    state_registration: z.string().nullable(),
    tax_free: z.boolean(),
    created_at: z.string().datetime({ offset: true }),
    updated_at: z.string().datetime({ offset: true }),
    user_id: z.string(),
    entry_number: z.number(),
    gender: z.enum(['MALE', 'FEMALE']).nullable(),
    birth_date: z.string().datetime({ offset: true }).nullable(),
    person_id: z.string(),
    addresses: z.array(
      z.object({
        number: z.string(),
        id: z.string(),
        created_at: z.string().datetime({ offset: true }),
        updated_at: z.string().datetime({ offset: true }),
        recipient_name: z.string(),
        recipient_phone: z.string(),
        cep: z.string(),
        street: z.string(),
        complement: z.string().nullable(),
        neighborhood: z.string(),
        city: z.string(),
        state: z.string(),
        platform: z.enum(['SHOPEE', 'MERCADO_LIVRE', 'TRAY', 'LOCAL']),
      }),
    ),
  })
  .describe('Colaborador obtido com sucesso.') as unknown as ToZod<GetEmployeesId200Type>

/**
 * @description Usuário não autenticado.
 */
export const getEmployeesId401Schema = z
  .object({
    message: z.string(),
  })
  .describe('Usuário não autenticado.') as unknown as ToZod<GetEmployeesId401Type>

/**
 * @description Colaborador não encontrado.
 */
export const getEmployeesId404Schema = z
  .object({
    message: z.string(),
  })
  .describe('Colaborador não encontrado.') as unknown as ToZod<GetEmployeesId404Type>

export const getEmployeesIdQueryResponseSchema = z.lazy(() => getEmployeesId200Schema) as unknown as ToZod<GetEmployeesIdQueryResponseType>