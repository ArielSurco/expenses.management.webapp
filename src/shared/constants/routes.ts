import { type ComponentPropsWithoutRef, type ComponentType } from 'react'

import { Home, Settings } from 'lucide-react'

interface Route {
  isProtected: boolean
  path: string
  sidebar?: {
    title: string
    icon: ComponentType<ComponentPropsWithoutRef<'svg'>>
  } | null
}

export const ROUTES = {
  signIn: {
    path: '/sign-in',
    isProtected: false,
    sidebar: null,
  },
  signUp: {
    path: '/sign-up',
    isProtected: false,
    sidebar: null,
  },
  dashboard: {
    path: '/dashboard',
    isProtected: true,
    sidebar: {
      title: 'Dashboard',
      icon: Home,
    },
  },
  settings: {
    path: '/settings',
    isProtected: true,
    sidebar: {
      title: 'Settings',
      icon: Settings,
    },
  },
} as const satisfies Record<string, Route>

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]['path']
