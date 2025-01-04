'use server'

import { z } from 'zod'

import { api } from '@/shared/services/api'

const responseSchema = z.object({
  token: z.string(),
})

interface Params {
  email: string
  password: string
}

export const signInService = async (params: Params) => {
  const response = await api.fetch(responseSchema, '/user/auth', {
    method: 'POST',
    body: JSON.stringify(params),
  })

  return response
}
