import { type ZodSchema } from 'zod'

import { safeFetch } from '../functions/safe-fetch'

const apiFetch = async <T>(schema: ZodSchema<T>, path: string, init?: RequestInit) => {
  'use server'

  const apiURL = process.env.API_URL ?? ''

  const data = await safeFetch(schema, `${apiURL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  })

  if (!data.success) {
    // eslint-disable-next-line no-console
    console.error({
      path,
      status: data.status,
      message: data.errorMessage,
    })
  }

  return data
}

export const api = {
  fetch: apiFetch,
} as const
