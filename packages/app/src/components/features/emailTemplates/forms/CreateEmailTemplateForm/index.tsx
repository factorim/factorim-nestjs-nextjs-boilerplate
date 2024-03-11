import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { FormProvider, useForm } from 'react-hook-form'
import isEqual from 'lodash/isEqual'
import { EditorRef, EmailEditorProps } from 'react-email-editor'
import { useTranslation } from 'react-i18next'
import log from 'loglevel'
const EmailEditor = dynamic(() => import('react-email-editor'), { ssr: false })

import { config } from '@/config/configClient'
import {
  CreateEmailTemplateFormValues,
  CreateEmailTemplateMutation,
  EmailTemplateType,
  EmailTemplateVariable,
  Option,
} from '@/types'
import { TemplateVariables } from '../widgets'
import { ServerErrorAlert, SubmitButton } from '@/components/widgets/forms'
import { EmailTemplateService } from '@/services'
import { getDisplayOptions } from '@/utils/display'
import { emailTemplateTypeConfig } from '@/constants/display'
import { findVariables } from '@/utils/email'

type CreateEmailTemplateFormProps = Record<string, never>

const CreateEmailTemplateForm: React.FC<CreateEmailTemplateFormProps> = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const emailEditorRef = useRef<EditorRef>(null)

  const [isEnabled, setIsEnabled] = useState(false)
  const [isDesignUpdated, setIsDesignUpdated] = useState(false)
  const [variables, setVariables] = useState<EmailTemplateVariable[]>([])

  const methods = useForm<CreateEmailTemplateFormValues>()
  const { register, formState, setError, watch } = methods
  const { errors } = formState
  const watchFields = watch(['type', 'subject', 'lang'])

  const onDesignUpdated = () => {
    setIsDesignUpdated(true)

    // Find variables
    const unlayer = emailEditorRef.current?.editor
    unlayer?.exportHtml((exportHtml) => {
      const { html } = exportHtml
      const newVariables = findVariables(html)
      setVariables(newVariables)
    })
  }

  const onLoad = () => {
    unlayer.addEventListener('design:updated', onDesignUpdated)
  }

  const onReady: EmailEditorProps['onReady'] = () => {}

  const createMutation = useMutation({
    mutationFn: (mutation: CreateEmailTemplateMutation) =>
      EmailTemplateService.createEmailTemplate(mutation),
    onSuccess: () => {
      router.push('/admin/email-templates')
    },
    onError: (error: ClientError) => {
      log.error(error)
      setError('root.serverError', {
        message: t('common.error.somethingWentWrong'),
      })
    },
  })

  const onSubmit = (data: CreateEmailTemplateFormValues) => {
    const unlayer = emailEditorRef.current?.editor

    unlayer?.exportHtml((exportHtml) => {
      const { design, html } = exportHtml
      const mutationData: CreateEmailTemplateMutation = {
        data: {
          type: data.type as EmailTemplateType,
          subject: data.subject,
          html,
          design,
          lang: data.lang,
        },
      }

      createMutation.mutate(mutationData)
    })
  }

  useEffect(() => {
    const isEnabled =
      isDesignUpdated ||
      !isEqual(null, watchFields[0]) ||
      !isEqual('', watchFields[1]) ||
      !isEqual(config.langs[0], watchFields[2])

    setIsEnabled(isEnabled)
  }, [watchFields, isDesignUpdated])

  return (
    <FormProvider {...methods}>
      <h1 className="font-bold text-2xl my-4">
        {t('email.action.newEmailTemplate')}
      </h1>
      <div className="grid grid-cols-1 gap-4">
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control space-y-2">
            <label htmlFor="type">{t('common.label.type')}</label>
            <div className="flex flex-row space-x-2">
              {getDisplayOptions(emailTemplateTypeConfig, false).map(
                (option: Option, index: number) => (
                  <div key={index} className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-2">{t(option.label)}</span>
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
              {...register('subject', { required: 'Add a subject' })}
              id="subject"
              className="input input-bordered w-full max-w-lg placeholder-neutral-content/30"
              placeholder="Email Template Subject"
            />
            {errors.subject && (
              <div className="text-error pt-2">{errors.subject.message}</div>
            )}
          </div>
          <div className="form-control space-y-2">
            <label htmlFor="body">{t('email.label.body')}</label>
            <TemplateVariables variables={variables} />
            <EmailEditor
              ref={emailEditorRef}
              onLoad={onLoad}
              onReady={onReady}
              minHeight={1024}
            />
          </div>
          <ServerErrorAlert errors={errors} />
          <SubmitButton
            isLoading={createMutation.isPending}
            isEnabled={isEnabled}
          />
        </form>
      </div>
    </FormProvider>
  )
}

export default CreateEmailTemplateForm
