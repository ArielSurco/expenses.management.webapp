import Form from 'next/form'

import { getAccountsService } from '@/accounts/services/get-accounts'
import { getCategoriesService } from '@/categories/services/get-categories'
import { Button } from '@/shared/components/button'
import { DatePicker } from '@/shared/components/date-picker'
import { Input } from '@/shared/components/input'
import { NumberInput } from '@/shared/components/number-input'
import { TextArea } from '@/shared/components/text-area'

import { AccountField } from './account-field'
import { CategoryField } from './category-field'

const action = async (formData: FormData) => {
  'use server'

  await new Promise((resolve) => setTimeout(resolve, 1000))
  // eslint-disable-next-line no-console
  console.log(Array.from(formData.entries()))
}

export async function NewExpenseForm() {
  const [categoriesResponse, accountsResponse] = await Promise.all([
    getCategoriesService(),
    getAccountsService(),
  ])

  const categories = categoriesResponse.success ? categoriesResponse.data : []
  const accounts = accountsResponse.success ? accountsResponse.data : []

  const parsedAccounts = accounts.map((account) => ({
    id: account.id,
    name: account.name,
    currencyId: account.currency.id,
  }))

  return (
    <Form action={action} className='flex flex-col gap-4'>
      <Input name='title' placeholder='Title' />
      <AccountField accounts={parsedAccounts} />
      <div className='flex gap-4'>
        <NumberInput allowNegative={false} autoComplete='off' name='amount' placeholder='Amount' />
        <DatePicker defaultValue={new Date()} name='date' />
      </div>
      <CategoryField categories={categories} />
      <TextArea name='description' placeholder='Description' />
      <Button type='submit'>Add expense</Button>
    </Form>
  )
}
