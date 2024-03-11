import { useContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import log from 'loglevel'

import { UpdatePostFormValues } from '@/types'
import { ModalContext } from '@/contexts'
import { ConfirmButton } from '@/components/widgets/forms'
import { PostService } from '@/services'

type DeletePostProps = {
  id: string
}

const DeletePost: React.FC<DeletePostProps> = ({ id }) => {
  const { t } = useTranslation()
  const { handleClose } = useContext(ModalContext)
  const { setError } = useFormContext<UpdatePostFormValues>()

  const deleteMutation = useMutation({
    mutationFn: (id: string) => {
      return PostService.deletePost(id)
    },
    onSuccess: async () => {
      handleClose()
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
      title={t('label.label.deletePost')}
      type="alert"
      isLink
      handleConfirm={() => handleDelete(id)}
    />
  )
}

export default DeletePost
