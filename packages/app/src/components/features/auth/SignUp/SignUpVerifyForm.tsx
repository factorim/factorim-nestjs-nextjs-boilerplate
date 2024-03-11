import { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { signIn, useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import log from 'loglevel'

import { SignUpFormValues, SignUpMutation } from '@/types'
import { AuthService } from '@/services'
import { SignUpContext, SignUpStep } from './contexts/SignUpContext'
import { PasswordStrength } from '@/components/widgets/ui'
import { checkPasswordStrength } from '@/utils/auth'
import { PasswordButton } from '@/components/widgets/forms'

type SignupCredentials = {
  email: string
  password: string
}

type SignUpVerifyProps = Record<string, never>

const SignUpVerifyForm: React.FC<SignUpVerifyProps> = () => {
  const { t } = useTranslation()
  const { update } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [signupCredentials, setSignupCredentials] = useState<SignupCredentials>(
    {
      email: '',
      password: '',
    },
  )

  const context = useContext(SignUpContext)
  const { email, token, setStep } = context

  const methods = useForm<SignUpFormValues>()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods
  const watchFields = watch(['password'])

  const signupMutation = useMutation({
    mutationFn: (data: SignUpMutation) => AuthService.signup(data),
    onSuccess: () => {
      toast.success(t('user.message.accountSuccessfullyCreated'))
      signIn('credentials', {
        email: signupCredentials.email,
        password: signupCredentials.password,
        callbackUrl: '/dashboard',
      })
      update({ email })
    },
    onError: (error: ClientError) => {
      log.error(error)
      setIsLoading(false)
    },
  })

  const onSubmit = (data: SignUpFormValues) => {
    setIsLoading(true)
    const mutationData: SignUpMutation = {
      data: {
        token,
        code: data.code,
        name: data.name,
        password: data.password,
      },
    }
    email && setSignupCredentials({ email, password: data.password })
    signupMutation.mutate(mutationData)
  }

  const pwdStrength = watchFields[0] && checkPasswordStrength(watchFields[0])

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-96 space-y-4">
        <div className="flex flex-col gap-4">
          <label className="block text-sm font-bold mb-2">
            {t('user.label.yourEmail')}
          </label>
          {email}
        </div>
        <div role="alert" className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{t('user.message.pleaseCheckYourMailboxForTheCode')}</span>
        </div>

        <div className="flex flex-col gap-4">
          <label className="block text-sm font-bold mb-2" htmlFor="code">
            {t('email.label.code')}
          </label>
          <input
            {...register('code', {
              required: t('user.message.addCode'),
            })}
            className="input input-bordered w-full max-w-xs"
            id="code"
            type="text"
            placeholder="code"
          />
          {errors.code && (
            <div className="text-error pt-2">{errors.code.message}</div>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            {t('user.label.name')}
          </label>
          <input
            {...register('name', {
              required: t('user.message.addName'),
            })}
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder={t('user.label.name')}
          />
          {errors.name && (
            <div className="text-error pt-2">{errors.name.message}</div>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            {t('user.label.password')}
          </label>
          <PasswordButton placeholder="*******" />
          {pwdStrength && <PasswordStrength pwdStrength={pwdStrength} />}
          {errors.password && (
            <div className="text-error pt-2">{errors.password.message}</div>
          )}
        </div>
        <div className="space-x-4">
          <button className="btn btn-primary" disabled={isLoading}>
            {isLoading && <span className="loading loading-spinner"></span>}
            {t('common.action.submit')}
          </button>
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault()
              setStep(SignUpStep.REQUEST)
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </FormProvider>
  )
}

export default SignUpVerifyForm
