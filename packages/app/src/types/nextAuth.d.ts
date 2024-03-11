import 'next-auth'

declare module 'next-auth' {
  interface Session {
    accessToken?: string | unknown
  }

  interface User {
    accessToken?: string
    refreshToken?: string
  }
}
