import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import log from 'loglevel'

import { UpdateProfileData, UpdateProfileMutation } from '@/types'
import { ProfileService } from '@/services'
import { config } from '@/config/configClient'

type ChangeLangFormProps = Record<string, never>

export const ChangeLangForm: React.FC<ChangeLangFormProps> = () => {
  const { t, i18n } = useTranslation()

  const { register } = useForm<UpdateProfileData>({
    defaultValues: {
      lang: i18n.language,
    },
  })

  const updateMutation = useMutation({
    mutationFn: (data: UpdateProfileMutation) =>
      ProfileService.updateProfile(data),
    onSuccess: () => {},
    onError: (error: ClientError) => {
      log.error(error)
      if (error.response.errors) {
        for (const err of error.response.errors) {
          toast.error(err.message)
        }
      }
    },
  })

  const handleChangeLang = async (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)

    const mutationData: UpdateProfileMutation = {
      data: {
        lang,
      },
    }

    updateMutation.mutate(mutationData)
  }

  return (
    <form className="w-96">
      <div className="mb-4">
        <label className="block text-xl font-bold mb-2" htmlFor="email">
          {t('common.label.changeLanguage')}
        </label>
        <select
          {...register('lang')}
          className="select select-bordered w-full max-w-xs"
          onChange={handleChangeLang}
        >
          {config.langs.map((lang: string, index: number) => (
            <option key={index} value={lang} className="p-5">
              {t(`lang.${lang}`)}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}
