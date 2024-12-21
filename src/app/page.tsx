import Form from 'next/form'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Label } from '@radix-ui/react-label'

import { Button } from '@/shared/components/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/card'
import { FormPendingSpinner } from '@/shared/components/form-pending-spinner'
import { Input } from '@/shared/components/input'

const signIn = async (formData: FormData) => {
  'use server'

  await new Promise((resolve) => setTimeout(resolve, 3000))

  redirect('/home')
}

export default function Home() {
  return (
    <div className='grid min-h-screen w-full place-items-center'>
      <Card className='w-1/3 min-w-fit'>
        <CardHeader>
          <CardTitle className='text-center'>Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <Form action={signIn} className='flex flex-col gap-3'>
            <CardDescription>Sign in to your account</CardDescription>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' name='email' placeholder='Email' />
            </div>

            <div className='flex flex-col gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' name='password' placeholder='Password' />
            </div>

            <Button className='w-full'>Sign in</Button>
            <FormPendingSpinner />
          </Form>
        </CardContent>
        <CardFooter>
          <CardDescription className='flex gap-1'>
            Don&apos;t have an account?
            <Link className='text-primary underline' href='/register'>
              Sign up
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}
