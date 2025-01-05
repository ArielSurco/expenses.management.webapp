'use client'

import { useSearchParams } from 'next/navigation'

export function SignInFeedback() {
  const searchParams = useSearchParams()

  const invalidCredentials = searchParams.get('error')

  return invalidCredentials === 'CredentialsSignin' ? (
    <span className='text-red-500'>Email or password wrong</span>
  ) : null
}
