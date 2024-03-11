'use client'

import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify'
import log from 'loglevel'

import { ResetPasswordFormValues, ResetPasswordMutation } from '@/types'
import { AuthService } from '@/services'
import { Loading, PasswordStrength } from '@/components/widgets/ui'
import { checkPasswordStrength } from '@/utils/auth'
import { PasswordButton } from '@/components/widgets/forms'
import { useUserEmailValidation } from '@/hooks'

type ResetPasswordProps = {
  token: string
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ token }) => {
  const { t } = useTranslation()

  const [isLoading, setIsLoading] = useState(false)
  const {
    userEmailValidation,
    errors: emailValidationErrors,
    isLoading: isEmailValidationLoading,
  } = useUserEmailValidation(token)

  const methods = useForm<ResetPasswordFormValues>()
  const {
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = methods
  const watchFields = watch(['password'])

  const resetPasswordMutation = useMutation({
    mutationFn: (data: ResetPasswordMutation) =>
      AuthService.resetPassword(data),
    onSuccess: () => {
      toast.success(t('user.message.passwordSuccessfullyReseted'))
      const password = getValues('password')
      userEmailValidation &&
        signIn('credentials', {
          email: userEmailValidation.email,
          password: password,
          callbackUrl: '/dashboard',
        })
    },
    onError: (error: ClientError) => {
      setIsLoading(false)
      log.error(error)
    },
  })

  const onSubmit = (data: ResetPasswordFormValues) => {
    setIsLoading(true)
    const mutationData: ResetPasswordMutation = {
      data: {
        token,
        password: data.password,
      },
    }
    resetPasswordMutation.mutate(mutationData)
  }

  const pwdStrength = watchFields[0] && checkPasswordStrength(watchFields[0])

  if (isEmailValidationLoading) {
    return (
      <div className="mx-auto w-96 space-y-10">
        <h1 className="text-4xl font-extrabold mb-1 text-center">
          {t('navigation.resetPassword')}
        </h1>
        <Loading />
      </div>
    )
  }

  if (emailValidationErrors) {
    let errorMessage = ''
    switch (emailValidationErrors[0].message) {
      case 'Token expired':
        errorMessage = t('user.error.tokenExpired')
        break
      case 'Token not found':
        errorMessage = t('user.error.tokenNotFound')
        break
      case 'Too many attempts':
        errorMessage = t('user.error.tooManyAttempts')
        break
      default:
        errorMessage = emailValidationErrors[0].message
        break
    }

    return (
      <div className="mx-auto w-96 space-y-10">
        <h1 className="text-4xl font-extrabold mb-1 text-center">
          {t('navigation.resetPassword')}
        </h1>
        <div className="alert alert-error">{errorMessage}</div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-96 space-y-10">
      <h1 className="text-4xl font-extrabold mb-1 text-center">
        {t('navigation.resetPassword')}
      </h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-96 space-y-4">
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

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              {t('user.label.addNewPassword')}
            </label>
            <PasswordButton placeholder="*******" />
            {pwdStrength && <PasswordStrength pwdStrength={pwdStrength} />}
            {errors.password && (
              <div className="text-error pt-2">{errors.password.message}</div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={'btn  btn-primary py-2 px-4 w-full'}
              disabled={isLoading}
            >
              {isLoading && <span className="loading loading-spinner"></span>}
              {t('common.action.submit')}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default ResetPassword
