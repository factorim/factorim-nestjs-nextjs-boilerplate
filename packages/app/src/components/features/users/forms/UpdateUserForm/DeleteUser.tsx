import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { useTranslation } from 'react-i18next'
import log from 'loglevel'

import { UpdateUserFormValues } from '@/types'
import { UserService } from '@/services'
import { ModalContext } from '@/contexts'
import { ConfirmButton } from '@/components/widgets/forms'

type DeleteUserProps = {
  id: string
}

const DeleteUser: React.FC<DeleteUserProps> = ({ id }) => {
  const { t } = useTranslation()
  const { handleClose } = useContext(ModalContext)
  const { setError } = useFormContext<UpdateUserFormValues>()

  const deleteMutation = useMutation({
    mutationFn: (id: string) => {
      return UserService.deleteUser(id)
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
      title={t('user.action.deleteUser')}
      type="alert"
      isLink
      handleConfirm={() => handleDelete(id)}
    />
  )
}

export default DeleteUser
