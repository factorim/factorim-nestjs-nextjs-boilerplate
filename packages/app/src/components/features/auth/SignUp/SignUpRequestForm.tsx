import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import log from 'loglevel'

import { SignUpContext, SignUpStep } from './contexts/SignUpContext'
import { isEmailValidator } from '@/utils/validator'
import {
  SignUpRequest,
  SignUpRequestFormValues,
  SignUpRequestMutation,
} from '@/types'
import { AuthService } from '@/services'

type SignUpRequestFormProps = Record<string, never>

const SignUpRequestForm: React.FC<SignUpRequestFormProps> = () => {
  const { t } = useTranslation()

  const context = useContext(SignUpContext)
  const { setStep, setEmail, setToken } = context

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpRequestFormValues>()

  const signUpRequestMutation = useMutation({
    mutationFn: (mutationData: SignUpRequestMutation) =>
      AuthService.signupRequest(mutationData),
    onSuccess: (data: SignUpRequest) => {
      setStep(SignUpStep.VERIFY)
      setToken(data.token)
    },
    onError: (error: ClientError) => {
      log.error(error)
    },
  })

  const onSubmit = (data: SignUpRequestFormValues) => {
    const mutationData: SignUpRequestMutation = {
      data: {
        email: data.email,
        lang: 'en',
      },
    }
    setEmail(data.email)
    signUpRequestMutation.mutate(mutationData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-96">
      <div className="mb-4">
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
          className="input input-bordered w-full max-w-xs"
          id="email"
          type="text"
          placeholder="email"
        />
        {errors.email && (
          <div className="text-error pt-2">{errors.email.message}</div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <button
            type="submit"
            className={
              'btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'
            }
            disabled={signUpRequestMutation.isPending}
          >
            {signUpRequestMutation.isPending && (
              <span className="loading loading-spinner"></span>
            )}
            {t('user.action.signUp')}
          </button>
        </div>
      </div>
    </form>
  )
}

export default SignUpRequestForm
