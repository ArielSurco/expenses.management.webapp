'use client'

import { type ComponentProps } from 'react'

import { NumericFormat } from 'react-number-format'

import { NUMBER_FORMAT } from '../constants/number-format'
import { cn } from '../functions/cn'

export function NumberInput({ className, ...props }: ComponentProps<typeof NumericFormat>) {
  return (
    <NumericFormat
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      decimalScale={2}
      decimalSeparator={NUMBER_FORMAT.decimalSeparator}
      thousandSeparator={NUMBER_FORMAT.thousandSeparator}
      {...props}
    />
  )
}
