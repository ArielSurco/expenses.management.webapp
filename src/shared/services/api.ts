import { type ZodSchema } from 'zod'

import { getServerSession } from '@/shared/actions/get-server-session'

import { safeFetch } from '../functions/safe-fetch'

interface FetchRequestInit extends RequestInit {
  sendToken?: boolean
}

const apiFetch = async <T>(schema: ZodSchema<T>, path: string, init?: FetchRequestInit) => {
  'use server'

  const apiURL = process.env.API_URL ?? ''
  const session = await getServerSession()

  const data = await safeFetch(schema, `${apiURL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.sendToken ? { Authorization: `Bearer ${session?.user.accessToken ?? ''}` } : {}),
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
