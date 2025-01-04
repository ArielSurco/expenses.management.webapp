import Form from 'next/form'
import { cookies } from 'next/headers'
import { redirect, RedirectType } from 'next/navigation'

import { Label } from '@radix-ui/react-label'

import { PasswordInput } from '@/auth/components/password-input'
import { SignInFeedback } from '@/auth/components/sign-in-feedback'
import { signInService } from '@/auth/services/sign-in'
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

const signIn = async (formData: FormData) => {
  'use server'

  const { success, data } = await signInService({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  if (success) {
    const cookiesStore = await cookies()

    cookiesStore.set('token', data.token)

    redirect('/dashboard')
  }

  const searchParams = new URLSearchParams({
    invalidCredentials: 'true',
  })

  redirect(`/sign-in?${searchParams.toString()}`, RedirectType.replace)
}

export default function SignIn() {
  return (
    <main className='grid min-h-screen w-full place-items-center'>
      <Card className='w-1/3 min-w-fit'>
        <CardHeader>
          <CardTitle className='text-center'>Sign in</CardTitle>
        </CardHeader>
        <CardContent>
          <Form action={signIn} className='flex flex-col gap-3'>
            <CardDescription>Sign in to your account</CardDescription>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' name='email' placeholder='Email' required />
            </div>

            <div className='flex flex-col gap-2'>
              <Label htmlFor='password'>Password</Label>
              <PasswordInput id='password' name='password' placeholder='Password' required />
            </div>

            <SignInFeedback />

            <Button className='w-full' type='submit'>
              Sign in
            </Button>
            <FormPendingSpinner />
          </Form>
        </CardContent>
        <CardFooter>
          <CardDescription className='flex gap-1'>
            Don&apos;t have an account?
            <Link className='text-primary underline' href='/sign-up'>
              Sign up
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </main>
  )
}
