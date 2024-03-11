import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import log from 'loglevel'

import { ChangeEmailFormValues, ChangeEmailMutation } from '@/types'
import { ProfileService } from '@/services'
import {
  ChangeEmailContext,
  ChangeEmailStep,
} from './contexts/ChangeEmailContext'

type ChangeEmailVerifyFormProps = Record<string, never>

const ChangeEmailVerifyForm: React.FC<ChangeEmailVerifyFormProps> = () => {
  const { t } = useTranslation()
  const { update } = useSession()

  const context = useContext(ChangeEmailContext)
  const { newEmail, token, setStep } = context

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeEmailFormValues>()

  const changeEmailMutation = useMutation({
    mutationFn: (data: ChangeEmailMutation) => ProfileService.changeEmail(data),
    onSuccess: () => {
      toast.success('Email successfully changed')
      update({ email: newEmail })
    },
    onError: (error: ClientError) => {
      log.error(error)
    },
  })

  const onSubmit = (data: ChangeEmailFormValues) => {
    const mutationData: ChangeEmailMutation = {
      data: {
        token,
        code: data.code,
      },
    }

    changeEmailMutation.mutate(mutationData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 space-y-4">
      <div className="flex flex-col gap-4">
        <label>{t('user.label.yourNewEmail')}</label>
        {newEmail}
      </div>
      <div className="flex flex-col gap-4">
        <label>{t('email.label.code')}</label>
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
      <div className="space-x-4">
        <button
          className="btn btn-primary"
          disabled={changeEmailMutation.isPending}
        >
          {changeEmailMutation.isPending && (
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

export default ChangeEmailVerifyForm
