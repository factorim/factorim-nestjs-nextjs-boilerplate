import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSession } from 'next-auth/react'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { ClientError } from 'graphql-request'
import { toast } from 'react-toastify'
import isEqual from 'lodash/isEqual'
import log from 'loglevel'

import { UpdateProfileFormValues, UpdateProfileMutation } from '@/types'
import { ProfileService } from '@/services'

type ChangeNameProps = Record<string, never>

export const ChangeNameForm: React.FC<ChangeNameProps> = () => {
  const { t } = useTranslation()

  const [name, setName] = useState('')
  const [isEdited, setIsEdited] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const { data: session, update } = useSession()

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm<UpdateProfileFormValues>()
  const watchFields = watch(['name'])

  const updateMutation = useMutation({
    mutationFn: (data: UpdateProfileMutation) =>
      ProfileService.updateProfile(data),
    onSuccess: () => {
      toast.success('Name successfully changed')
      const name = getValues('name')
      update({ name })
    },
    onError: (error: ClientError) => {
      log.error(error)
    },
  })

  const onSubmit = (data: UpdateProfileFormValues) => {
    const mutationData: UpdateProfileMutation = {
      data: {
        name: data.name,
      },
    }

    updateMutation.mutate(mutationData)
  }

  const handleCancel = () => {
    setIsEdited(false)
    session?.user?.name && setValue('name', session?.user?.name)
  }

  useEffect(() => {
    if (session?.user?.name) {
      setName(session?.user?.name)
      setValue('name', session?.user?.name)
    }
  }, [session?.user?.name, setValue])

  useEffect(() => {
    const isEnabled = watchFields[0] != '' && !isEqual(name, watchFields[0])
    setIsEnabled(isEnabled)
  }, [watchFields, name])

  return (
    <div className="w-96">
      <div className="mb-4">
        <label className="block text-xl font-bold mb-2" htmlFor="email">
          {t('user.label.name')}
        </label>
        {!isEdited ? (
          <div>
            <div>{session?.user?.name}</div>
            <button className="btn" onClick={() => setIsEdited(true)}>
              {t('common.action.edit')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="w-96 space-y-4">
            <div className="flex flex-col gap-4">
              <input
                {...register('name', {
                  required: t('user.message.addName'),
                })}
                className="input input-bordered w-full max-w-xs"
                type="text"
              />
              {errors.name && (
                <div className="text-error pt-2">{errors.name.message}</div>
              )}
            </div>
            <div className="space-x-4">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => setIsEdited(true)}
                disabled={!isEnabled}
              >
                {t('common.action.submit')}
              </button>

              <button className="btn" onClick={handleCancel}>
                {t('common.action.cancel')}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
