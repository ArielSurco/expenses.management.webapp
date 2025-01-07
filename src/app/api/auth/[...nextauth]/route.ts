import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { signInService } from '@/auth/services/sign-in'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const response = await signInService({
          email: credentials?.email ?? '',
          password: credentials?.password ?? '',
        })

        if (response.success) {
          return {
            id: '1',
            accessToken: response.data.token,
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    jwt({ account, token, user }) {
      if (account) {
        token.id = user.id
        token.accessToken = user.accessToken
      }

      return token
    },
    session({ session, token }) {
      session.user.id = token.id as string
      session.user.accessToken = token.accessToken as string

      return session
    },
  },
  pages: {
    signIn: '/sign-in',
    newUser: '/dashboard',
  },
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
