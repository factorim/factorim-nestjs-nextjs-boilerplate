import { useState } from 'react'
import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { useTranslation } from 'react-i18next'
import log from 'loglevel'

import {
  ChangePasswordFormValues,
  ChangePasswordMutation,
  UserAuth,
} from '@/types'
import { useMe } from '@/hooks'
import { AuthService } from '@/services'
import { checkPasswordStrength } from '@/utils/auth'
import { PasswordStrength } from '@/components/widgets/ui'
import { PasswordButton } from '@/components/widgets/forms'

type ChangePasswordFormProps = Record<string, never>

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = () => {
  const { t } = useTranslation()
  const [confirmed, setConfirmed] = useState<boolean>(false)

  const { me } = useMe()

  const methods = useForm<ChangePasswordFormValues>()
  const {
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = methods
  const watchFields = watch(['newPassword'])

  const changePasswordMutation = useMutation({
    mutationFn: (data: ChangePasswordMutation) =>
      AuthService.changePassword(data),
    onSuccess: () => {
      setConfirmed(true)
    },
    onError: (error: ClientError) => {
      log.error(error)
      if (error.response.errors) {
        for (const err of error.response.errors) {
          setError('password', {
            type: 'focus',
            message: err.message,
          })
        }
      }
    },
  })

  const onSubmit = (data: ChangePasswordFormValues) => {
    const mutationData: ChangePasswordMutation = {
      data: {
        password: data.password,
        newPassword: data.newPassword,
      },
    }

    changePasswordMutation.mutate(mutationData)
  }

  const pwdStrength = watchFields[0] && checkPasswordStrength(watchFields[0])

  return (
    <>
      {me?.auth === UserAuth.CREDENTIALS && (
        <div>
          <label className="block text-xl font-bold mb-2" htmlFor="email">
            {t('user.label.changePassword')}
          </label>
          {!confirmed ? (
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="w-96">
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="password">
                    {t('user.label.currentPassword')}
                  </label>
                  <PasswordButton
                    required="user.label.addYourCurrentPassword"
                    placeholder="*******"
                  />
                  {errors.password && (
                    <div className="text-error pt-2">
                      {errors.password.message}
                    </div>
                  )}
                  <label className="block text-sm mb-2" htmlFor="email">
                    {t('user.label.newPassword')}
                  </label>
                  <PasswordButton
                    name="newPassword"
                    required="user.label.addNewPassword"
                    placeholder="*******"
                  />
                  {pwdStrength && (
                    <PasswordStrength pwdStrength={pwdStrength} />
                  )}
                  {errors.newPassword && (
                    <div className="text-error pt-2">
                      {errors.newPassword.message}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <button
                      type="submit"
                      className="btn btn-info"
                      disabled={
                        !pwdStrength || pwdStrength?.score < 2 ? true : false
                      }
                    >
                      {t('common.action.submit')}
                    </button>
                  </div>
                </div>
                <div>
                  <Link
                    href={{
                      pathname: '/reset-password',
                    }}
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    passHref
                  >
                    {t('user.label.forgotPassword')}
                  </Link>
                </div>
              </form>
            </FormProvider>
          ) : (
            <div>{t('user.message.yourPasswordHasBeenChanged')}</div>
          )}
        </div>
      )}
    </>
  )
}
