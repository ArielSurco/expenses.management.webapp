import Form from 'next/form'

import { Button } from '@/shared/components/button'
import { DatePicker } from '@/shared/components/date-picker'
import { Input } from '@/shared/components/input'
import { NumberInput } from '@/shared/components/number-input'
import { TextArea } from '@/shared/components/text-area'

import { CategoryField } from './category-field'

const action = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log(Array.from(formData.entries()))
}

export function NewExpenseForm() {
  return (
    <Form action={action} className='flex flex-col gap-4'>
      <Input name='title' placeholder='Title' />
      <div className='flex gap-4'>
        <NumberInput allowNegative={false} autoComplete='off' name='amount' placeholder='Amount' />
        <DatePicker defaultValue={new Date()} name='date' />
      </div>
      <CategoryField />
      <TextArea name='description' placeholder='Description' />
      <Button type='submit'>Add expense</Button>
    </Form>
  )
}
