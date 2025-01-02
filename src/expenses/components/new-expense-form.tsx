import Form from 'next/form'

import { Button } from '@/shared/components/button'
import { DatePicker } from '@/shared/components/date-picker'
import { Input } from '@/shared/components/input'
import { NumberInput } from '@/shared/components/number-input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/select'

import { CATEGORIES } from '../constants/mock-data'

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
        <DatePicker name='date' />
      </div>
      <Select defaultValue={CATEGORIES[0]} name='category'>
        <SelectTrigger>
          <SelectValue placeholder='Select a category' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button type='submit'>Add expense</Button>
    </Form>
  )
}
