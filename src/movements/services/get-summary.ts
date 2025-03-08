import { z } from 'zod'

import { api } from '@/shared/services/api'

const responseSchema = z.array(
  z.object({
    budget: z.number(),
    currency: z.object({
      id: z.string(),
      name: z.string(),
      symbol: z.string(),
    }),
    expenses: z.number(),
    incomes: z.number(),
    month: z.number(),
    year: z.number(),
  }),
)

export type GetSummarySuccessResponse = z.infer<typeof responseSchema>

export const getSummary = async () => {
  const response = await api.fetch(responseSchema, '/movement/summary', {
    sendToken: true,
  })

  return response
}
