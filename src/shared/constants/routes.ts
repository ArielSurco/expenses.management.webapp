interface Route {
  isProtected: boolean
  path: string
}

export const ROUTES = {
  signIn: {
    path: '/sign-in',
    isProtected: false,
  },
  signUp: {
    path: '/sign-up',
    isProtected: false,
  },
} as const satisfies Record<string, Route>

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]['path']
