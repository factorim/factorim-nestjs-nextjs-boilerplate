'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import GoogleOAuth from '../GoogleOAuth'
import CredentialsForm from './CredentialsForm'

type SignInProps = Record<string, never>

const SignIn: React.FC<SignInProps> = () => {
  const router = useRouter()
  const { status } = useSession()
  const { t } = useTranslation()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [status, router])

  return (
    <div className="mx-auto w-96 space-y-10">
      <h1 className="text-4xl font-extrabold mb-1 text-center">
        {t('user.action.signIn')}
      </h1>
      <GoogleOAuth label={'user.action.googleSignIn'} />
      <div className="divider capitalize">{t('user.label.or')}</div>
      <CredentialsForm />
      <div>
        {t('user.label.needAccount')}{' '}
        <Link
          href={{
            pathname: '/signup',
          }}
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          passHref
        >
          {t('user.action.signUp')}
        </Link>
      </div>
    </div>
  )
}

export default SignIn
