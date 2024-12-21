import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/shared/functions/cn'

function Skeleton({ className, ...props }: Readonly<ComponentPropsWithoutRef<'div'>>) {
  return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />
}

export { Skeleton }
