import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/select'
import { mockAccounts } from '../constants/mock-data'

interface AccountFieldProps {
  name?: string
}

export function AccountField({ name }: AccountFieldProps) {
  return (
    <Select name={name}>
      <SelectTrigger>
        <SelectValue placeholder='Select an account' />
      </SelectTrigger>
      <SelectContent>
        {mockAccounts.map((account) => (
          <SelectItem key={account.id} value={String(account.id)}>
            {account.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
