'use client'

import { useFormStatus } from 'react-dom'

export function FormPendingSpinner() {
  const { pending } = useFormStatus()

  return pending ? (
    <div className='fixed inset-0 z-50 grid h-screen w-full place-items-center bg-background/50'>
      <div className='h-6 w-6 animate-spin rounded-full border-2 border-b-transparent border-l-transparent border-r-current border-t-transparent' />
    </div>
  ) : null
}
