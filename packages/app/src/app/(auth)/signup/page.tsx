import React from 'react'
import type { Metadata } from 'next'

import { config } from '@/config/configClient'
import SignUp from '@/components/features/auth/SignUp'

export const metadata: Metadata = {
  title: `Sign Up - ${config.name}`,
  description: 'Factorim NestJS Next.js Boilerplate',
}

const SignUpPage: React.FC = () => {
  return <SignUp />
}

export default SignUpPage
