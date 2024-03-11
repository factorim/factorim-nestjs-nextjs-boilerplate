import { useContext, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { signOut } from 'next-auth/react'
import { toast } from 'react-toastify'
import log from 'loglevel'

import { DeleteProfileFormValues, DeleteProfileMutation } from '@/types'
import { ProfileService } from '@/services'
import {
  DeleteAccountContext,
  DeleteAccountStep,
} from './contexts/DeleteAccountContext'

type DeleteAccountVerifyFormProps = Record<string, never>

const DeleteAccountVerifyForm: React.FC<DeleteAccountVerifyFormProps> = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const context = useContext(DeleteAccountContext)
  const { token, setStep } = context

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<DeleteProfileFormValues>()

  const deleteProfileMutation = useMutation({
    mutationFn: (data: DeleteProfileMutation) =>
      ProfileService.deleteProfile(data),
    onSuccess: () => {
      signOut()
      toast.success(t('user.message.accountSuccessfullyDeleted'))
      router.push('/')
    },
    onError: (error: ClientError) => {
      log.error(error)
      setError('root.serverError', {
        message: t('common.error.somethingWentWrong'),
      })
    },
  })

  const onSubmit = (data: DeleteProfileFormValues) => {
    setIsLoading(true)
    const mutationData: DeleteProfileMutation = {
      data: {
        token,
        code: data.code,
      },
    }

    deleteProfileMutation.mutate(mutationData)
  }

  const handleCancel = () => {
    setIsLoading(false)
    setStep(DeleteAccountStep.INIT)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96">
      <label>{t('user.message.enterCodeToConfirmDeleteAccount')}</label>
      <div className="my-5">
        <input
          {...register('code', {
            required: t('email.message.addCode'),
          })}
          className="input input-bordered w-full max-w-xs"
          type="text"
        />
        {errors.code && (
          <div className="text-error pt-2">{errors.code.message}</div>
        )}
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="btn btn-secondary mr-5"
          onClick={() => setStep(DeleteAccountStep.CONFIRM)}
        >
          {isLoading && <span className="loading loading-spinner"></span>}
          {t('common.action.submit')}
        </button>
        <button type="submit" className="btn" onClick={handleCancel}>
          {t('common.action.cancel')}
        </button>
      </div>
    </form>
  )
}

export default DeleteAccountVerifyForm
