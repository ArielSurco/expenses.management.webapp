'use client'

import { useEffect, useRef, useState } from 'react'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { Button } from '@/shared/components/button'
import { Calendar } from '@/shared/components/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/popover'
import { cn } from '@/shared/functions/cn'

import { Input } from './input'

interface DatePickerProps {
  defaultValue?: Date
  name?: string
}

export function DatePicker({ name, defaultValue }: Readonly<DatePickerProps>) {
  const [date, setDate] = useState<Date | undefined>(defaultValue)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = date ? date.toISOString() : ''
    }
  }, [date])

  return (
    <>
      <Input name={name} ref={inputRef} type='hidden' />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              'w-[280px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
            variant='outline'
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar autoFocus mode='single' onSelect={setDate} selected={date} />
        </PopoverContent>
      </Popover>
    </>
  )
}
