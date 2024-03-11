import { useEffect, useState } from 'react'
import { Modal } from 'react-daisyui'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { FormProvider, useForm } from 'react-hook-form'
import isEqual from 'lodash/isEqual'
import { useTranslation } from 'react-i18next'
import log from 'loglevel'

import { UpdatePostFormValues, UpdatePostMutation } from '@/types'
import { useUserPost } from '@/hooks'
import { PostService } from '@/services'
import {
  ServerErrorAlert,
  SubmitButtonWithStatus,
} from '@/components/widgets/forms'
import DeletePost from './DeletePost'
import { SUCCESS_MESSAGE_DURATION } from '@/constants/display'

type UpdatePostFormProps = {
  id: string
}

const UpdatePostForm: React.FC<UpdatePostFormProps> = ({ id }) => {
  const { t } = useTranslation()
  const [showSuccess, setShowSuccess] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

  const queryClient = useQueryClient()
  const { post, isLoading, refetch } = useUserPost(id)

  const methods = useForm<UpdatePostFormValues>({
    defaultValues: {
      enabled: true,
    },
  })
  const { setError, formState, register, reset, watch } = methods
  const { errors } = formState
  const watchFields = watch(['title', 'content', 'enabled'])

  const updateMutation = useMutation({
    mutationFn: (data: UpdatePostMutation) => {
      return PostService.updatePost(data)
    },
    onSuccess: async () => {
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), SUCCESS_MESSAGE_DURATION)
      refetch()
      queryClient.refetchQueries({ queryKey: ['posts'] })
    },
    onError: (error: ClientError) => {
      log.error(error)
      setError('root.serverError', {
        message: t('common.error.somethingWentWrong'),
      })
    },
  })

  const onSubmit = (data: UpdatePostFormValues) => {
    const mutationData: UpdatePostMutation = {
      id,
      data: {
        title: data.title.trim(),
        content: data.content.trim(),
        enabled: data.enabled,
      },
    }

    updateMutation.mutate(mutationData)
  }

  useEffect(() => {
    post &&
      reset({
        title: post.title,
        content: post.content,
        enabled: post.enabled,
      })
  }, [post, reset])

  useEffect(() => {
    const isEnabled =
      !isEqual(post?.title, watchFields[0]) ||
      !isEqual(post?.content, watchFields[1]) ||
      !isEqual(post?.enabled, watchFields[2])

    !isLoading && setIsEnabled(isEnabled)
  }, [watchFields, post, isLoading])

  return (
    <FormProvider {...methods}>
      <Modal.Header className="font-bold">Edit Post</Modal.Header>
      <Modal.Body>
        <div className="grid grid-cols-1 gap-4">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="form-control">
              <label htmlFor="name" className="label">
                {t('post.label.title')}
              </label>
              <input
                {...register('title', { required: t('post.message.addTitle') })}
                id="postName"
                className="input input-bordered w-full max-w-xs"
                placeholder={t('post.label.title')}
              />
              {errors.title && (
                <div className="text-error pt-2">{errors.title.message}</div>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="networkName" className="label">
                {t('post.label.content')}
              </label>
              <textarea
                {...register('content', {
                  required: t('post.message.addContent'),
                })}
                className="textarea textarea-bordered"
                placeholder={t('post.label.content')}
              ></textarea>
              {errors.content && (
                <div className="text-error pt-2">{errors.content.message}</div>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="enabled" className="label">
                {t('common.label.enabled')}
              </label>
              <input
                {...register('enabled')}
                type="checkbox"
                className="toggle toggle-success"
              />
              {errors.enabled && (
                <div className="text-error pt-2">{errors.enabled.message}</div>
              )}
            </div>
            <div className="flex justify-between mt-4">
              <DeletePost id={id} />
              <SubmitButtonWithStatus
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

export default UpdatePostForm
