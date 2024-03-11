import React from 'react'
import type { Metadata } from 'next'

import { config } from '@/config/configClient'
import SignIn from '@/components/features/auth/SignIn'

export const metadata: Metadata = {
  title: `Sign In - ${config.name}`,
  description: 'Factorim NestJS Next.js Boilerplate',
}

const SignInPage: React.FC = () => {
  return <SignIn />
}

export default SignInPage
