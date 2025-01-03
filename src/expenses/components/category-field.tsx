'use client'

import { useState } from 'react'

import { MdOutlineCreate } from 'react-icons/md'

import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/select'

import { CATEGORIES } from '../constants/mock-data'

export function CategoryField() {
  const [isNewCategory, setIsNewCategory] = useState<boolean>(false)

  const toggleIsNewCategory = () => {
    setIsNewCategory(!isNewCategory)
  }

  return (
    <div className='flex gap-2'>
      {isNewCategory ? (
        <Input name='newCategory' placeholder='New category' />
      ) : (
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
      )}
      <Button onClick={toggleIsNewCategory} size='icon' variant='ghost'>
        <MdOutlineCreate />
      </Button>
    </div>
  )
}
