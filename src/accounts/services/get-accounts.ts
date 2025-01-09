'use server'

import { z } from 'zod'

import { api } from '@/shared/services/api'

const responseSchema = z.array(
  z.object({
    id: z.string(),
    availableBalance: z.number(),
    createdAt: z.string(),
    currency: z.object({
      id: z.string(),
      name: z.string(),
      symbol: z.string(),
    }),
    deletedAt: z.string(),
    expenseUpToDate: z.number(),
    isActive: z.boolean(),
    limitCredit: z.number().optional(),
    name: z.string(),
    type: z.number(),
    updatedAt: z.string(),
    user: z.object({
      id: z.string(),
      username: z.string(),
      email: z.string(),
      isActive: z.boolean(),
      createdAt: z.string(),
      updatedAt: z.string(),
      password: z.string(),
      deletedAt: z.string(),
    }),
  }),
)

export const getAccountsService = async () => {
  const response = await api.fetch(responseSchema, '/account', {
    method: 'GET',
    cache: 'no-store',
    sendToken: true,
  })

  return response
}
