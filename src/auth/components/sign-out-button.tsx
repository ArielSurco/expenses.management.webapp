'use client'

import { type ComponentProps } from 'react'

import { signOut } from 'next-auth/react'

import { SidebarMenuButton } from '@/shared/components/sidebar'

type SignOutButtonProps = Omit<ComponentProps<typeof SidebarMenuButton>, 'onClick'>

export function SignOutButton({ children, ...props }: Readonly<SignOutButtonProps>) {
  return (
    <SidebarMenuButton onClick={() => void signOut()} {...props}>
      {children}
    </SidebarMenuButton>
  )
}
