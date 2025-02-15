'use client'

import { useState } from 'react'

import { Input } from '@/shared/components/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/select'

interface AccountFieldProps {
  accounts: {
    id: string
    name: string
    currency: {
      id: string
      symbol: string
    }
  }[]
  name?: string
}

export function AccountField({ name, accounts }: Readonly<AccountFieldProps>) {
  const [currency, setCurrency] = useState<
    AccountFieldProps['accounts'][number]['currency'] | null
  >(accounts[0]?.currency ?? null)

  const handleSelectValueChange = (value: string) => {
    const selectedAccount = accounts.find((account) => account.id === value)

    if (selectedAccount) {
      setCurrency(selectedAccount.currency)
    }
  }

  return (
    <>
      <Input data-symbol={currency?.symbol} name='currencyId' type='hidden' value={currency?.id} />
      <Select defaultValue={accounts[0]?.id} name={name} onValueChange={handleSelectValueChange}>
        <SelectTrigger>
          <SelectValue placeholder='Select an account' />
        </SelectTrigger>
        <SelectContent>
          {accounts.map((account) => (
            <SelectItem key={account.id} value={account.id}>
              {account.name}
            </SelectItem>
          ))}
          {accounts.length === 0 && (
            <span className='p-2 text-center text-lg'>No options available</span>
          )}
        </SelectContent>
      </Select>
    </>
  )
}
