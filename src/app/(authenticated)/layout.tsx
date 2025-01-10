import { redirect } from 'next/navigation'
import { type ReactNode } from 'react'

import { z } from 'zod'

import { Navbar } from '@/layout/components/navbar'
import { NavigationSidebar } from '@/layout/components/navigation-sidebar'
import { ThemeToggle } from '@/layout/components/theme-toggle'
import { SidebarInset } from '@/shared/components/sidebar'
import { api } from '@/shared/services/api'

const validateToken = async () => {
  'use server'

  const response = await api.fetch(z.object({}), '/user', {
    method: 'GET',
    sendToken: true,
  })

  return response.success
}

export default async function AuthenticatedLayout({ children }: Readonly<{ children: ReactNode }>) {
  const isValidToken = await validateToken()

  if (!isValidToken) {
    redirect('/sign-out')
  }

  return (
    <>
      <NavigationSidebar />
      <SidebarInset>
        <Navbar />
        <ThemeToggle />
        {children}
      </SidebarInset>
    </>
  )
}
