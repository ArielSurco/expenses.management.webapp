import Form from 'next/form'

import { Button } from '@/shared/components/button'
import { DatePickerDemo } from '@/shared/components/date-picker'
import { Input } from '@/shared/components/input'

const action = async (formData: FormData) => {
  console.log(Array.from(formData.entries()))
}

export function NewExpenseForm() {
  return (
    <Form action={action} className='flex flex-col gap-4'>
      <Input name='title' placeholder='Title' />
      <Input name='amount' placeholder='Amount' step='0.01' type='number' />
      <div className='relative z-50'>
        <DatePickerDemo />
      </div>
      <Input name='category' placeholder='Category' />
      <Button type='submit'>Add expense</Button>
    </Form>
  )
}
