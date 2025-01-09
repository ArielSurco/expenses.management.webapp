'use client'

import { useEffect, useRef, useState } from 'react'

import { NumberInput } from '@/shared/components/number-input'

interface AmountFieldProps {
  name: string
}

export function AmountField({ name }: Readonly<AmountFieldProps>) {
  const formRef = useRef<HTMLFormElement>(null)
  const [currencySymbol, setCurrencySymbol] = useState<string>('')

  useEffect(() => {
    if (!formRef.current) {
      formRef.current = document.querySelector(`form:has(#${name})`)
    }

    if (formRef.current) {
      const currencyInput = formRef.current.querySelector(`input[name="currencyId"]`)
      const currencySymbol = currencyInput?.getAttribute('data-symbol')

      setCurrencySymbol(currencySymbol ?? '')
    }
  }, [name])

  return (
    <NumberInput
      allowNegative={false}
      autoComplete='off'
      id={name}
      name={name}
      placeholder='Amount'
      prefix={`${currencySymbol} `}
    />
  )
}
