'use client'

import { useState } from 'react'

import { MdOutlineCreate } from 'react-icons/md'
import { RiArrowGoBackFill } from 'react-icons/ri'

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

interface CategoryFieldProps {
  categories: {
    id: string
    name: string
  }[]
}

export function CategoryField({ categories }: Readonly<CategoryFieldProps>) {
  const [isNewCategory, setIsNewCategory] = useState<boolean>(false)

  const toggleIsNewCategory = () => {
    setIsNewCategory(!isNewCategory)
  }

  return (
    <div className='flex gap-2'>
      {isNewCategory ? (
        <Input name='newCategory' placeholder='New category' />
      ) : (
        <Select defaultValue={categories[0]?.id} name='category'>
          <SelectTrigger>
            <SelectValue placeholder='Select a category' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
      <Button onClick={toggleIsNewCategory} size='icon' type='button' variant='ghost'>
        {isNewCategory ? <RiArrowGoBackFill /> : <MdOutlineCreate />}
      </Button>
    </div>
  )
}
