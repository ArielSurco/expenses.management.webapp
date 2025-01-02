import Form from 'next/form'

import { Button } from '@/shared/components/button'
import { DatePickerDemo } from '@/shared/components/date-picker'
import { Input } from '@/shared/components/input'
import { NumberInput } from '@/shared/components/number-input'

const action = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log(Array.from(formData.entries()))
}

export function NewExpenseForm() {
  return (
    <Form action={action} className='flex flex-col gap-4'>
      <Input name='title' placeholder='Title' />
      <NumberInput allowNegative={false} autoComplete='off' name='amount' placeholder='Amount' />
      <div className='relative z-50'>
        <DatePickerDemo />
      </div>
      <Input name='category' placeholder='Category' />
      <Button type='submit'>Add expense</Button>
    </Form>
  )
}
