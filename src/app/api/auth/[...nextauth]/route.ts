import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { signInService } from '@/auth/services/sign-in'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('response')
        const response = await signInService({
          email: credentials?.email ?? '',
          password: credentials?.password ?? '',
        })

        if (response.success) {
          return {
            id: '1',
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log('url', url)
      console.log('baseUrl', baseUrl)

      return baseUrl
    },
  },
  pages: {
    signIn: '/sign-in',
    newUser: '/dashboard',
  },
})

export { handler as GET, handler as POST }
