import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import log from 'loglevel'

import { UpdateEmailTemplateFormValues } from '@/types'
import { ConfirmButton } from '@/components/widgets/forms'
import { EmailTemplateService } from '@/services'

type DeleteEmailTemplateProps = {
  id: string
}

const DeleteEmailTemplate: React.FC<DeleteEmailTemplateProps> = ({ id }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { setError } = useFormContext<UpdateEmailTemplateFormValues>()

  const deleteMutation = useMutation({
    mutationFn: (id: string) => {
      return EmailTemplateService.deleteEmailTemplate(id)
    },
    onSuccess: async () => {
      router.push('/admin/email-templates')
    },
    onError: (error: ClientError) => {
      log.error(error)
      setError('root.serverError', {
        message: t('common.error.somethingWentWrong'),
      })
    },
  })

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id)
  }

  return (
    <ConfirmButton
      title={t('email.action.deleteEmailTemplate')}
      type="alert"
      isLink
      handleConfirm={() => handleDelete(id)}
    />
  )
}

export default DeleteEmailTemplate
