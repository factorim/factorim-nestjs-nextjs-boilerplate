import React from 'react'
import type { Metadata } from 'next'

import { config } from '@/config/configClient'
import ResetPasswordRequestForm from '@/components/features/auth/ResetPasswordRequestForm'

export const metadata: Metadata = {
  title: `Reset Password Request - ${config.name}`,
  description: 'Boilerplate project that combines NestJS and Next.js',
}

const ResetPasswordRequestPage: React.FC = () => {
  return <ResetPasswordRequestForm />
}

export default ResetPasswordRequestPage
