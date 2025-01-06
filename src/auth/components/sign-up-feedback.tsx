'use client'

import { useSearchParams } from 'next/navigation'

export function SignUpFeedback() {
  const searchParams = useSearchParams()

  const error = searchParams.get('error')

  return error ? <span className='text-red-500'>{error}</span> : null
}
