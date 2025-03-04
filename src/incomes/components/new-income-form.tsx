import Form from 'next/form'

import { getAccountsService } from '@/accounts/services/get-accounts'
import { AccountField } from '@/expenses/components/account-field'
import { Button } from '@/shared/components/button'
import { DatePicker } from '@/shared/components/date-picker'
import { Input } from '@/shared/components/input'
import { NumberInput } from '@/shared/components/number-input'
import { TextArea } from '@/shared/components/text-area'

const action = async (formData: FormData) => {
  'use server'

  await new Promise((resolve) => setTimeout(resolve, 1000))
  // eslint-disable-next-line no-console
  console.log(Array.from(formData.entries()))
}

export async function NewIncomeForm() {
  const accountsResponse = await getAccountsService()

  const accounts = accountsResponse.success ? accountsResponse.data : []

  return (
    <Form action={action} className='flex flex-col gap-4'>
      <Input name='title' placeholder='Title' />
      <AccountField accounts={accounts} />
      <div className='flex gap-4'>
        <NumberInput allowNegative={false} autoComplete='off' name='amount' placeholder='Amount' />
        <DatePicker defaultValue={new Date()} name='date' />
      </div>
      <TextArea name='description' placeholder='Description' />
      <Button type='submit'>Add income</Button>
    </Form>
  )
}
