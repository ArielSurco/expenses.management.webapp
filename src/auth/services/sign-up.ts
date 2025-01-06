'use server'

import { z } from 'zod'

import { api } from '@/shared/services/api'

const responseSchema = z.object({
  message: z.string(),
})

interface Params {
  email: string
  password: string
  username: string
}

export const signUpService = async (params: Params) => {
  const response = await api.fetch(responseSchema, '/user', {
    method: 'POST',
    body: JSON.stringify(params),
  })

  return response
}
