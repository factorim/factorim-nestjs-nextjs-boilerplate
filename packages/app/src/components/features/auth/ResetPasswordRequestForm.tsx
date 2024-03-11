'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { useMutation } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { ClientError } from 'graphql-request'
import log from 'loglevel'

import {
  ResetPasswordRequestFormValues,
  ResetPasswordRequestMutation,
} from '@/types'
import { isEmailValidator } from '@/utils/validator'
import { AuthService } from '@/services'

type ResetPasswordRequestFormProps = Record<string, never>

const ResetPasswordRequestForm: React.FC<
  ResetPasswordRequestFormProps
> = () => {
  const router = useRouter()
  const { status } = useSession()
  const { t } = useTranslation()
  const [requestSuccess, setRequestSuccess] = useState(false)

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [status, router])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordRequestFormValues>()

  const resetPasswordRequestMutation = useMutation({
    mutationFn: (mutationData: ResetPasswordRequestMutation) =>
      AuthService.resetPasswordRequest(mutationData),
    onSuccess: () => {
      setRequestSuccess(true)
    },
    onError: (error: ClientError) => {
      log.error(error)
    },
  })

  const onSubmit = (data: ResetPasswordRequestFormValues) => {
    const mutationData: ResetPasswordRequestMutation = {
      data: {
        email: data.email,
      },
    }

    resetPasswordRequestMutation.mutate(mutationData)
  }

  return (
    <div className="mx-auto w-96 space-y-10">
      <h1 className="text-4xl font-extrabold mb-1 text-center">
        {t('navigation.resetPassword')}
      </h1>
      {!requestSuccess ? (
        <div className="space-y-8">
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-96">
            <div className="mb-4 space-y-4">
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
                <span>
                  {t('user.message.enterAccountEmailToResetPassword')}
                </span>
              </div>

              <label className="block text-sm font-bold mb-2" htmlFor="email">
                {t('user.label.email')}
              </label>
              <input
                {...register('email', {
                  required: t('user.message.addAnEmail'),
                  validate: {
                    isEmailValidator,
                  },
                })}
                className="input input-bordered w-full"
                id="email"
                type="text"
                placeholder="email"
              />
              {errors.email && (
                <div className="text-error pt-2">{errors.email.message}</div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className={'btn  btn-primary py-2 px-4 w-full'}
                disabled={resetPasswordRequestMutation.isPending}
              >
                {resetPasswordRequestMutation.isPending && (
                  <span className="loading loading-spinner"></span>
                )}
                {t('user.action.sendResetEmail')}
              </button>
            </div>
          </form>
          <div className="text-center">
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
      ) : (
        <div role="alert" className="alert alert-success">
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
          <span>{t('user.message.enterAccountEmailToResetPassword')}</span>
        </div>
      )}
    </div>
  )
}

export default ResetPasswordRequestForm
