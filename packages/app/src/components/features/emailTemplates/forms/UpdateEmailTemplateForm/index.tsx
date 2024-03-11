import { useEffect, useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { FormProvider, useForm } from 'react-hook-form'
import isEqual from 'lodash/isEqual'
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor'
import { useTranslation } from 'react-i18next'
import log from 'loglevel'

import { config } from '@/config/configClient'
import {
  EmailTemplateType,
  EmailTemplateVariable,
  Option,
  UpdateEmailTemplateFormValues,
  UpdateEmailTemplateMutation,
} from '@/types'
import { useEmailTemplate } from '@/hooks'
import DeleteEmailTemplate from './DeleteEmailTemplate'
import {
  ServerErrorAlert,
  SubmitButtonWithStatus,
} from '@/components/widgets/forms'
import { TemplateVariables } from '../widgets'
import {
  emailTemplateTypeConfig,
  SUCCESS_MESSAGE_DURATION,
} from '@/constants/display'
import { Loading } from '@/components/widgets/ui'
import { EmailTemplateService } from '@/services'
import { getDisplayOptions } from '@/utils/display'
import { findVariables } from '@/utils/email'

export type UpdateEmailTemplateFormProps = {
  id: string
}

const UpdateEmailTemplateForm: React.FC<UpdateEmailTemplateFormProps> = ({
  id,
}) => {
  const { t } = useTranslation()
  const emailEditorRef = useRef<EditorRef>(null)

  const [showSuccess, setShowSuccess] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const [isDesignUpdated, setIsDesignUpdated] = useState(false)
  const [variables, setVariables] = useState<EmailTemplateVariable[]>([])

  const {
    emailTemplate,
    isLoading: queryLoading,
    refetch,
  } = useEmailTemplate(id)

  const methods = useForm<UpdateEmailTemplateFormValues>()
  const { setError, formState, register, reset, watch } = methods
  const { errors } = formState
  const watchFields = watch(['type', 'subject', 'lang'])

  const onDesignUpdated = () => {
    setIsDesignUpdated(true)

    // Find variables
    const unlayer = emailEditorRef.current?.editor
    unlayer?.exportHtml((exportHtml) => {
      const { html } = exportHtml
      const variables = findVariables(html)
      setVariables(variables)
    })
  }

  const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    unlayer.addEventListener('design:updated', onDesignUpdated)
    if (emailTemplate) {
      unlayer.loadDesign(emailTemplate.design)
      const variables = findVariables(emailTemplate.html)
      setVariables(variables)
    }
  }

  const onReady: EmailEditorProps['onReady'] = () => {}

  const updateMutation = useMutation({
    mutationFn: (mutationData: UpdateEmailTemplateMutation) =>
      EmailTemplateService.updateEmailTemplate(mutationData),
    onSuccess: () => {
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), SUCCESS_MESSAGE_DURATION)
      refetch()
    },
    onError: (error: ClientError) => {
      log.error(error)
      setError('root.serverError', {
        message: 'Sorry, something went wrong.',
      })
    },
  })

  const onSubmit = (data: UpdateEmailTemplateFormValues) => {
    const unlayer = emailEditorRef.current?.editor

    unlayer?.exportHtml((exportHtml) => {
      const { design, html } = exportHtml
      const mutationData: UpdateEmailTemplateMutation = {
        id,
        data: {
          type: data.type as EmailTemplateType,
          subject: data.subject,
          html,
          design,
          lang: data.lang,
        },
      }

      updateMutation.mutate(mutationData)
    })
  }

  useEffect(() => {
    emailTemplate &&
      reset({
        type: emailTemplate.type,
        subject: emailTemplate.subject,
        html: emailTemplate.html,
        design: emailTemplate.design,
        lang: emailTemplate.lang,
      })
  }, [emailTemplate, reset])

  useEffect(() => {
    const isEnabled =
      isDesignUpdated ||
      !isEqual(emailTemplate?.type, watchFields[0]) ||
      !isEqual(emailTemplate?.subject, watchFields[1]) ||
      !isEqual(emailTemplate?.lang, watchFields[2])

    !queryLoading && setIsEnabled(isEnabled)
  }, [watchFields, emailTemplate, queryLoading, isDesignUpdated])

  return (
    <FormProvider {...methods}>
      <h1 className="font-bold text-2xl my-4">
        {t('email.label.updateEmailTemplate')}
      </h1>
      <div>
        <div className="grid grid-cols-1 gap-4">
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control space-y-2">
              <label htmlFor="type">{t('common.label.type')}</label>
              <div className="flex flex-row space-x-2">
                {getDisplayOptions(emailTemplateTypeConfig, false).map(
                  (option: Option, index: number) => (
                    <div key={index} className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text mr-2">
                          {t(option.label)}
                        </span>
                        <input
                          {...register('type', { required: 'Add a type' })}
                          type="radio"
                          id="type"
                          value={option.value}
                          className="radio checked:bg-blue-500"
                        />
                      </label>
                    </div>
                  ),
                )}
              </div>
              {errors.type && (
                <div className="text-error pt-2">{errors.type.message}</div>
              )}
            </div>
            <div className="form-control space-y-2">
              <label htmlFor="lang">{t('common.label.lang')}</label>
              <div className="w-full max-w-xs">
                <select
                  {...register('lang')}
                  className="select select-bordered w-full max-w-xs"
                >
                  {config.langs.map((lang: string, index: number) => (
                    <option key={index} value={lang} className="p-5">
                      {t(`lang.${lang}`)}
                    </option>
                  ))}
                </select>
                {errors.lang && (
                  <div className="text-error pt-2">{errors.lang.message}</div>
                )}
              </div>
            </div>
            <div className="form-control space-y-2">
              <label htmlFor="subject">{t('email.label.subject')}</label>
              <input
                {...register('subject', {
                  required: t('email.error.addSubject'),
                })}
                id="subject"
                className="input input-bordered w-full max-w-lg placeholder-neutral-content/30"
                placeholder={t('email.error.emailTemplateSubject')}
              />
              {errors.subject && (
                <div className="text-error pt-2">{errors.subject.message}</div>
              )}
            </div>
            <div className="form-control space-y-2">
              <label htmlFor="position">{t('email.label.body')}</label>
              <TemplateVariables variables={variables} />
              {emailTemplate ? (
                <EmailEditor
                  ref={emailEditorRef}
                  onLoad={onLoad}
                  onReady={onReady}
                  minHeight={1024}
                />
              ) : (
                <Loading className="py-4" />
              )}
            </div>
            <div className="flex justify-between mt-4">
              <DeleteEmailTemplate id={id} />
              <SubmitButtonWithStatus
                showSuccess={showSuccess}
                isLoading={updateMutation.isPending}
                isEnabled={isEnabled}
              />
            </div>
            <ServerErrorAlert errors={errors} />
          </form>
        </div>
      </div>
    </FormProvider>
  )
}

export default UpdateEmailTemplateForm
