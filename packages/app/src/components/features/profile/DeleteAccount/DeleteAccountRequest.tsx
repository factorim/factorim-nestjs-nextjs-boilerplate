import { useContext, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import log from 'loglevel'

import { DeleteProfileFormValues } from '@/types'
import { ProfileService } from '@/services'
import {
  DeleteAccountContext,
  DeleteAccountStep,
} from './contexts/DeleteAccountContext'

type DeleteAccountRequestProps = Record<string, never>

const DeleteAccountRequest: React.FC<DeleteAccountRequestProps> = () => {
  const { t } = useTranslation()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const context = useContext(DeleteAccountContext)
  const { setStep, setToken } = context

  const { setError } = useForm<DeleteProfileFormValues>()

  const requestDeleteProfileMutation = useMutation({
    mutationFn: () => ProfileService.requestDeleteProfile(),
    onSuccess: (token: string) => {
      setIsLoading(false)
      setToken(token)
      setStep(DeleteAccountStep.CONFIRM)
    },
    onError: (error: ClientError) => {
      log.error(error)
      setError('root.serverError', {
        message: t('common.error.somethingWentWrong'),
      })
    },
  })

  const handleRequestDeleteProfile = () => {
    setIsLoading(true)
    requestDeleteProfileMutation.mutate()
  }

  const handleCancel = () => {
    setIsLoading(false)
    setStep(DeleteAccountStep.INIT)
  }

  return (
    <div className="mb-4">
      <button
        type="submit"
        className="btn btn-secondary mr-5"
        onClick={handleRequestDeleteProfile}
        disabled={isLoading}
      >
        {isLoading && <span className="loading loading-spinner"></span>}
        {t('common.action.areYouSure')}
      </button>
      <button type="submit" className="btn" onClick={handleCancel}>
        {t('common.action.cancel')}
      </button>
    </div>
  )
}

export default DeleteAccountRequest
