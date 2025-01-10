'use client'

import { useEffect } from 'react'

import { signOut } from 'next-auth/react'

import { ROUTES } from '@/shared/constants/routes'

export default function SignOutPage() {
  useEffect(() => {
    void signOut({
      callbackUrl: ROUTES.signIn.path,
    })
  }, [])

  return null
}
