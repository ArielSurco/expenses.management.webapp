'use client'

import { type ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { BsEye, BsEyeSlash } from 'react-icons/bs'

import { Button } from '@/shared/components/button'
import { Input } from '@/shared/components/input'

export const PasswordInput = forwardRef(function PasswordInput(
  props: Omit<ComponentPropsWithoutRef<typeof Input>, 'type'>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='relative'>
      <Input {...props} ref={ref} type={showPassword ? 'text' : 'password'} />
      <Button
        className='absolute right-4 top-0 h-full'
        onClick={() => setShowPassword(!showPassword)}
        size='fit'
        type='button'
        variant='unstyled'
      >
        {showPassword ? <BsEye /> : <BsEyeSlash />}
      </Button>
    </div>
  )
})
