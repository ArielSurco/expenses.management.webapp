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
    currencyId: string
  }[]
  name?: string
}

export function AccountField({ name, accounts }: Readonly<AccountFieldProps>) {
  const [currencyId, setCurrencyId] = useState<string>(accounts[0].currencyId)

  const handleSelectValueChange = (value: string) => {
    const selectedAccount = accounts.find((account) => account.id === value)

    if (selectedAccount) {
      setCurrencyId(selectedAccount.currencyId)
    }
  }

  return (
    <>
      <Input name='currencyId' type='hidden' value={currencyId} />
      <Select defaultValue={accounts[0].id} name={name} onValueChange={handleSelectValueChange}>
        <SelectTrigger>
          <SelectValue placeholder='Select an account' />
        </SelectTrigger>
        <SelectContent>
          {accounts.map((account) => (
            <SelectItem key={account.id} value={account.id}>
              {account.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}
