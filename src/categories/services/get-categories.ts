'use server'

import { z } from 'zod'

import { api } from '@/shared/services/api'

const responseSchema = z.array(
  z.object({
    id: z.string(),
    isDefault: z.boolean(),
    name: z.string(),
  }),
)

export const getCategoriesService = async () => {
  const response = await api.fetch(responseSchema, '/category', {
    method: 'GET',
    cache: 'no-store',
    sendToken: true,
  })

  return response
}
