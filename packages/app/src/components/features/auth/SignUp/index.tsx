'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { SignUpProvider } from './contexts/SignUpContext'
import SignUpSteps from './SignUpSteps'
import GoogleOAuth from '../GoogleOAuth'

type SignUpProps = Record<string, never>

const SignUp: React.FC<SignUpProps> = () => {
  const router = useRouter()
  const { status } = useSession()
  const { t } = useTranslation()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [status, router])

  return (
    <SignUpProvider>
      <div className="mx-auto w-96 space-y-10">
        <h1 className="text-4xl font-extrabold mb-1 text-center">
          {t('user.action.signUp')}
        </h1>
        <GoogleOAuth label={'user.action.googleSignUp'} />
        <div className="divider capitalize">{t('user.label.or')}</div>
        <SignUpSteps />
        <div>
          {t('user.message.alreadyHaveAccount')}{' '}
          <Link
            href={{
              pathname: '/signin',
            }}
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            passHref
          >
            {t('user.action.signIn')}
          </Link>
        </div>
      </div>
    </SignUpProvider>
  )
}

export default SignUp
