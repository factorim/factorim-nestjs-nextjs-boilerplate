import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import log from 'loglevel'

import {
  ChangeEmailRequestFormValues,
  ChangeEmailRequestMutation,
} from '@/types'
import { ProfileService } from '@/services'
import { isEmailValidator } from '@/utils/validator'
import {
  ChangeEmailContext,
  ChangeEmailStep,
} from './contexts/ChangeEmailContext'

type ChangeEmailRequestFormProps = Record<string, never>

const ChangeEmailRequestForm: React.FC<ChangeEmailRequestFormProps> = () => {
  const { t } = useTranslation()

  const context = useContext(ChangeEmailContext)
  const { setStep, setNewEmail, setToken } = context

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeEmailRequestFormValues>()

  const changeEmailRequestMutation = useMutation({
    mutationFn: (data: ChangeEmailRequestMutation) =>
      ProfileService.changeEmailRequest(data),
    onSuccess: (token: string) => {
      setStep(ChangeEmailStep.VERIFY)
      setToken(token)
    },
    onError: (error: ClientError) => {
      log.error(error)
    },
  })

  const onSubmit = (data: ChangeEmailRequestFormValues) => {
    const mutationData: ChangeEmailRequestMutation = {
      data: {
        email: data.email,
      },
    }
    setNewEmail(data.email)
    changeEmailRequestMutation.mutate(mutationData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 space-y-4">
      <div className="flex flex-col gap-4">
        <label>{t('user.label.enterYourNewEmail')}</label>
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
          placeholder={t('user.label.email')}
        />
        {errors.email && (
          <div className="text-error pt-2">{errors.email.message}</div>
        )}
      </div>
      <div className="space-x-4">
        <button
          className="btn btn-primary"
          disabled={changeEmailRequestMutation.isPending}
        >
          {changeEmailRequestMutation.isPending && (
            <span className="loading loading-spinner"></span>
          )}
          {t('common.action.submit')}
        </button>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault()
            setStep(ChangeEmailStep.START)
          }}
        >
          {t('common.action.cancel')}
        </button>
      </div>
    </form>
  )
}

export default ChangeEmailRequestForm
