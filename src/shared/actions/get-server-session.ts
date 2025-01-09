'use server'

import { getServerSession as nextAuthGetServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'

export const getServerSession = async () => {
  return nextAuthGetServerSession(authOptions)
}
