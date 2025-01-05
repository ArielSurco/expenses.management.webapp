import { NextResponse } from 'next/server'

import { withAuth } from 'next-auth/middleware'

import { type Route, ROUTES } from './shared/constants/routes'

const protectedRoutes = Object.values(ROUTES)
  .filter((route) => route.isProtected)
  .map((route) => route.path)

const findRouteByPath = (path: string): Route | null => {
  return Object.values(ROUTES).find((route) => route.path === path) ?? null
}

export default withAuth(
  function middleware(req) {
    const nextToken = req.nextauth.token
    const route = findRouteByPath(req.nextUrl.pathname)

    if (!nextToken && route?.isProtected) {
      return NextResponse.redirect(new URL(ROUTES.signIn.path, req.url))
    }

    if (nextToken && req.nextUrl.pathname === ROUTES.signIn.path) {
      return NextResponse.redirect(new URL(ROUTES.dashboard.path, req.url))
    }

    if (nextToken && route?.permanentRedirect) {
      return NextResponse.redirect(new URL(route.permanentRedirect, req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: () => true,
    },
  },
)

export const config = {
  matcher: [...protectedRoutes, ROUTES.signIn.path],
}
