import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import log from 'loglevel'

import { configServer } from '@/config/configServer'
import { UserRole } from '@/types'
import { AuthService } from '@/services'
import { decodeJWT } from '@/utils/jwt'
import { refreshTokenIfNeeded } from '@/utils/auth'

const AUTH_COOKIE_NAME = 'factorim-auth'

declare module 'next-auth' {
  interface User {
    roles?: string[]
  }

  interface Session {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
      roles?: UserRole[]
    }
  }
}

if (configServer.env === 'development') {
  log.setLevel('debug')
} else {
  log.setLevel('info')
}

const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/signin',
    error: '/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        if (!credentials) return null

        const { email, password } = credentials
        const data = await AuthService.signin({ email, password })
        if (!data) throw new Error('Something went wrong')
        const decoded = await decodeJWT(data.accessToken)

        return {
          id: decoded.id,
          email: decoded.email,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        }
      },
    }),
    GoogleProvider({
      clientId: configServer.auth.googleClientId,
      clientSecret: configServer.auth.googleClientSecret,
    }),
  ],
  secret: configServer.auth.secret,
  session: {
    maxAge: configServer.auth.sessionMaxAge,
  },
  cookies: {
    sessionToken: {
      name: AUTH_COOKIE_NAME,
      options: { httpOnly: true, sameSite: 'lax', path: '/', secure: true },
    },
  },
  callbacks: {
    async signIn({ account, user }) {
      switch (account?.provider.toLowerCase()) {
        case 'google':
          if (!account.id_token) return false

          try {
            const idToken = account.id_token
            const data = await AuthService.signinGoogle(idToken)
            if (!data) throw new Error('Something went wrong')
            if (data.accessToken && data.refreshToken) {
              user.accessToken = data.accessToken
              user.refreshToken = data.refreshToken
              return true
            } else {
              return false
            }
          } catch (error) {
            log.error(error)
          }
      }
      return true
    },
    async jwt({ token, user, account, trigger, session }) {
      if (account && user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
      }

      const decoded = decodeJWT(token.accessToken)

      if (trigger === 'update' && session?.email) {
        token.email = session.email
      }
      if (trigger === 'update' && session?.name) {
        token.name = session.name
      } else {
        token.name = decoded.name
      }

      // Roles
      token.roles = decoded.roles

      // Refresh
      const refreshedToken = await refreshTokenIfNeeded(
        token.accessToken as string,
        token.refreshToken as string,
      )
      token.accessToken = refreshedToken.accessToken
      token.refreshToken = refreshedToken.refreshToken

      return token
    },
    // Send properties to the client, like an access_token from a provider.
    async session({ session, token }) {
      session.user = {
        email: token.email,
        name: token.name,
        roles: Array.isArray(token.roles) ? token.roles : undefined,
      }
      session.accessToken = token.accessToken

      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
