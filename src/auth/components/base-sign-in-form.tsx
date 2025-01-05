'use client'

import Form from 'next/form'
import { type ComponentProps } from 'react'

import { signIn } from 'next-auth/react'

type BaseSignInFormProps = Omit<ComponentProps<typeof Form>, 'action' | 'formMethod'>

export function BaseSignInForm({ children, ...props }: Readonly<BaseSignInFormProps>) {
  const handleSubmit = async (formData: FormData) => {
    await signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: true,
    })
  }

  return (
    <Form action={handleSubmit} {...props}>
      {children}
    </Form>
  )
}
