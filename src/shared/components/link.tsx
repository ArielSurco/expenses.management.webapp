import NextLink from 'next/link'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

import { type RoutePath } from '../constants/routes'

interface LinkProps extends ComponentPropsWithoutRef<typeof NextLink> {
  href: RoutePath
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, ...props }, ref) => (
  <NextLink ref={ref} {...props}>
    {children}
  </NextLink>
))

Link.displayName = 'Link'

export { Link }
