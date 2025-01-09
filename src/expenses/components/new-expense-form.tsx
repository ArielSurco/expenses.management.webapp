import Form from 'next/form'
import { redirect } from 'next/navigation'

import { getAccountsService } from '@/accounts/services/get-accounts'
import { getCategoriesService } from '@/categories/services/get-categories'
import { Button } from '@/shared/components/button'
import { DatePicker } from '@/shared/components/date-picker'
import { Input } from '@/shared/components/input'
import { NumberInput } from '@/shared/components/number-input'
import { TextArea } from '@/shared/components/text-area'
import { ROUTES } from '@/shared/constants/routes'
import { removeNumberFormat } from '@/shared/functions/remove-number-format'

import { spendService } from '../services/spend'

import { AccountField } from './account-field'
import { CategoryField } from './category-field'

const action = async (formData: FormData) => {
  'use server'

  const amountValue = removeNumberFormat(formData.get('amount') as string)

  const response = await spendService({
    accountId: formData.get('accountId') as string,
    categoryId: formData.get('categoryId') as string,
    currencyId: formData.get('currencyId') as string,
    detail: formData.get('description') as string,
    forceSpend: false,
    title: formData.get('title') as string,
    value: amountValue,
  })

  if (response.success) {
    redirect(ROUTES.dashboard.path)
  }
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
      <AccountField accounts={parsedAccounts} name='accountId' />
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
