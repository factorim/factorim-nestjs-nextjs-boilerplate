import { useState } from 'react'
import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useTranslation } from 'react-i18next'

import { SignInFormValues } from '@/types'
import { PasswordButton } from '@/components/widgets/forms'

type UserDemo = {
  email: string
  password: string
}

type UserDemoSignIn = {
  admin: UserDemo
  user: UserDemo
}

const users: UserDemoSignIn = {
  admin: {
    email: 'admin@factorim.io',
    password: 'secret42',
  },
  user: {
    email: 'user@factorim.io',
    password: 'secret42',
  },
}

const CredentialsForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation()

  const methods = useForm<SignInFormValues>({
    defaultValues: {
      email: users.admin.email,
      password: users.admin.password,
    },
  })
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit = (mutationData: SignInFormValues) => {
    setIsLoading(true)
    signIn('credentials', {
      email: mutationData.email,
      password: mutationData.password,
      callbackUrl: '/dashboard',
    })
  }

  const handleSelectUser = (user: UserDemo) => {
    setValue('email', user.email)
    setValue('password', user.password)
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-8 mb-4">
        <button className="btn" onClick={() => handleSelectUser(users.admin)}>
          {t('user.label.admin')}
        </button>
        <button className="btn" onClick={() => handleSelectUser(users.user)}>
          {t('user.label.user')}
        </button>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              {t('user.label.email')}
            </label>
            <input
              {...register('email', {
                required: t('user.message.addAnEmail'),
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t(
                    'user.message.enteredValueDoesNotNatchEmailFormat',
                  ),
                },
              })}
              className="input input-bordered w-full"
              id="email"
              type="text"
              placeholder={t('user.label.email')}
            />
            {errors.email && (
              <div className="text-error pt-2">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              {t('user.label.password')}
            </label>
            <PasswordButton placeholder="*******" />
            {errors.password && (
              <div className="text-error pt-2">{errors.password.message}</div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="btn btn-primary">
              {isLoading && <span className="loading loading-spinner"></span>}
              {t('user.action.signIn')}
            </button>
            <Link
              href={{
                pathname: '/reset-password',
              }}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              passHref
            >
              {t('user.action.forgotPassword')}
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default CredentialsForm
