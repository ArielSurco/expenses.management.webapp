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
  }[]
  name?: string
}

export function AccountField({ name, accounts }: Readonly<AccountFieldProps>) {
  return (
    <Select defaultValue={accounts[0].id} name={name}>
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
  )
}
