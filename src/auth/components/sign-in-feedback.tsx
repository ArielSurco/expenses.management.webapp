'use client'

import { useSearchParams } from 'next/navigation'

export function SignInFeedback() {
  const searchParams = useSearchParams()

  const invalidCredentials = searchParams.get('invalidCredentials')

  return invalidCredentials === 'true' ? (
    <span className='text-red-500'>Email or password wrong</span>
  ) : null
}
