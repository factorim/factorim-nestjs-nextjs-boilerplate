import { useEffect, useState } from 'react'
import { Modal } from 'react-daisyui'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { FormProvider, useForm } from 'react-hook-form'
import isEqual from 'lodash/isEqual'
import { useTranslation } from 'react-i18next'
import log from 'loglevel'

import { UpdateUserFormValues, UpdateUserMutation } from '@/types'
import { ServerErrorAlert } from '@/components/widgets/forms'
import UpdateUserSubmit from './UpdateUserSubmit'
import DeleteUser from './DeleteUser'
import { useUser } from '@/hooks'
import { UserService } from '@/services'
import { SUCCESS_MESSAGE_DURATION } from '@/constants/display'

type UpdateUserFormProps = {
  id: string
}

const UpdateUserForm: React.FC<UpdateUserFormProps> = ({ id }) => {
  const { t } = useTranslation()
  const [showSuccess, setShowSuccess] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

  const { user, isLoading } = useUser(id)

  const methods = useForm<UpdateUserFormValues>()
  const { setError, formState, register, reset, watch } = methods
  const { errors } = formState
  const watchFields = watch(['status'])

  const updateMutation = useMutation({
    mutationFn: (data: UpdateUserMutation) => {
      return UserService.updateUser(data)
    },
    onSuccess: async () => {
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), SUCCESS_MESSAGE_DURATION)
    },
    onError: (error: ClientError) => {
      log.error(error)
      setError('root.serverError', {
        message: t('common.error.somethingWentWrong'),
      })
    },
  })

  const onSubmit = (data: UpdateUserFormValues) => {
    const mutationData: UpdateUserMutation = {
      id,
      data: {
        status: data.status,
      },
    }

    updateMutation.mutate(mutationData)
  }

  useEffect(() => {
    user &&
      reset({
        status: user.status,
      })
  }, [user, reset])

  useEffect(() => {
    const isEnabled = !isEqual(user?.status, watchFields[0])

    !isLoading && setIsEnabled(isEnabled)
  }, [watchFields, user, isLoading])

  return (
    <FormProvider {...methods}>
      <Modal.Header className="font-bold">Edit User</Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-1 gap-4">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="form-control">
              <label htmlFor="name" className="label">
                {t('user.label.email')}
              </label>
              {user?.email}
            </div>

            <div className="form-control">
              <label htmlFor="enabled" className="label">
                {t('common.label.status')}
              </label>
              <input
                {...register('status')}
                type="checkbox"
                className="toggle toggle-success"
              />
              {errors.status && (
                <div className="text-error pt-2">{errors.status.message}</div>
              )}
            </div>
            <div className="flex justify-between mt-4">
              <DeleteUser id={id} />
              <UpdateUserSubmit
                showSuccess={showSuccess}
                isLoading={updateMutation.isPending}
                isEnabled={isEnabled}
              />
            </div>
            <ServerErrorAlert errors={errors} />
          </form>
        </div>
      </Modal.Body>
    </FormProvider>
  )
}

export default UpdateUserForm
