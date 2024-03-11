import { useContext, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Modal } from 'react-daisyui'
import isEqual from 'lodash/isEqual'
import { ClientError } from 'graphql-request'
import { useTranslation } from 'react-i18next'
import log from 'loglevel'

import { CreatePostFormValues, CreatePostMutation } from '@/types'
import { ModalContext } from '@/contexts'
import { PostService } from '@/services'
import { ServerErrorAlert, SubmitButton } from '@/components/widgets/forms'

type CreatePostFormProps = Record<string, never>

const CreatePostForm: React.FC<CreatePostFormProps> = () => {
  const { t } = useTranslation()
  const [isEnabled, setIsEnabled] = useState(false)

  const methods = useForm<CreatePostFormValues>({
    defaultValues: {
      enabled: true,
    },
  })
  const { setError, formState, register, watch } = methods
  const { errors } = formState
  const watchFields = watch(['title', 'content'])

  const queryClient = useQueryClient()
  const { handleClose } = useContext(ModalContext)

  const createMutation = useMutation({
    mutationFn: (data: CreatePostMutation) => {
      return PostService.createPost(data)
    },
    onSuccess: async () => {
      handleClose()
      queryClient.refetchQueries({ queryKey: ['posts'] })
    },
    onError: (error: ClientError) => {
      log.error(error)
      setError('root.serverError', {
        message: t('common.error.somethingWentWrong'),
      })
    },
  })

  const onSubmit = (data: CreatePostFormValues) => {
    const mutationData: CreatePostMutation = {
      data: {
        title: data.title.trim(),
        content: data.content.trim(),
        enabled: data.enabled,
      },
    }

    createMutation.mutate(mutationData)
  }

  useEffect(() => {
    const isEnabled =
      !isEqual('', watchFields[0]) && !isEqual('', watchFields[1])
    setIsEnabled(isEnabled)
  }, [watchFields])

  return (
    <FormProvider {...methods}>
      <Modal.Header className="font-bold">New Post</Modal.Header>
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
                Enabled
              </label>
              <input
                {...register('enabled')}
                type="checkbox"
                className="toggle toggle-success"
                defaultChecked={true}
              />
              {errors.enabled && (
                <div className="text-error pt-2">{errors.enabled.message}</div>
              )}
            </div>
            <ServerErrorAlert errors={errors} />
            <SubmitButton
              isLoading={createMutation.isPending}
              isEnabled={isEnabled}
            />
          </form>
        </div>
      </Modal.Body>
    </FormProvider>
  )
}

export default CreatePostForm
