import { z } from 'zod'

import { api } from '@/shared/services/api'

interface SpendServiceParams {
  accountId: string
  categoryId: string
  currencyId: string
  detail: string
  forceSpend: boolean
  title: string
  value: number
}

const responseSchema = z.object({
  message: z.string(),
  remainingBalance: z.number(),
})

export const spendService = async (body: SpendServiceParams) => {
  const response = await api.fetch(responseSchema, '/spend', {
    method: 'POST',
    body: JSON.stringify(body),
    sendToken: true,
  })

  return response
}
