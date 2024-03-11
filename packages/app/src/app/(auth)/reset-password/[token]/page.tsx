import React from 'react'
import type { Metadata } from 'next'

import { config } from '@/config/configClient'
import ResetPasswordForm from '@/components/features/auth/ResetPasswordForm'

export const metadata: Metadata = {
  title: `Reset Password - ${config.name}`,
  description: 'Boilerplate project that combines NestJS and Next.js',
}

type ResetPasswordPageProps = {
  params: { token: string }
}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({ params }) => {
  return <ResetPasswordForm token={params.token} />
}

export default ResetPasswordPage
