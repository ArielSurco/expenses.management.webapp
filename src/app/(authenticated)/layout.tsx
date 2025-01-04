import { type ReactNode } from 'react'

import { Navbar } from '@/layout/components/navbar'
import { NavigationSidebar } from '@/layout/components/navigation-sidebar'
import { ThemeToggle } from '@/layout/components/theme-toggle'
import { SidebarInset } from '@/shared/components/sidebar'

export default function AuthenticatedLayout({ children }: Readonly<{ children: ReactNode }>) {
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
