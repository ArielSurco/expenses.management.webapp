import Form from 'next/form'
import { redirect } from 'next/navigation'

import { Label } from '@radix-ui/react-label'

import { PasswordInput } from '@/auth/components/password-input'
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
import { Link } from '@/shared/components/link'

const signIn = async () => {
  'use server'

  await new Promise((resolve) => setTimeout(resolve, 3000))

  redirect('/home')
}

export default function SignUp() {
  return (
    <main className='grid min-h-screen w-full place-items-center'>
      <Card className='w-1/3 min-w-fit'>
        <CardHeader>
          <CardTitle className='text-center'>Sign up</CardTitle>
        </CardHeader>
        <CardContent>
          <Form action={signIn} className='flex flex-col gap-3'>
            <CardDescription>Create an account to get started</CardDescription>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' name='email' placeholder='Email' required />
            </div>

            <div className='flex flex-col gap-2'>
              <Label htmlFor='password'>Password</Label>
              <PasswordInput id='password' name='password' placeholder='Password' required />
            </div>

            <div className='flex flex-col gap-2'>
              <Label htmlFor='confirmPassword'>Confirm Password</Label>
              <PasswordInput
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Confirm Password'
                required
              />
            </div>

            <Button className='w-full'>Sign up</Button>
            <FormPendingSpinner />
          </Form>
        </CardContent>
        <CardFooter>
          <CardDescription className='flex gap-1'>
            Already have an account?
            <Link className='text-primary underline' href='/sign-in'>
              Sign in
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </main>
  )
}
