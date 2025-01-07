import { type DefaultSession, type DefaultUser } from 'next-auth'
import { type DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken?: string
      id?: string
    } & DefaultSession['user']
  }

  interface User extends DefaultUser {
    accessToken?: string
    id?: string
  }

  interface JWT extends DefaultJWT {
    accessToken?: string
    id?: string
  }
}
