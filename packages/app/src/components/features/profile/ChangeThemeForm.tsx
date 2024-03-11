import { ChangeEvent, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import log from 'loglevel'
import { useTheme } from 'next-themes'

import { UpdateProfileData, UpdateProfileMutation } from '@/types'
import { ProfileService } from '@/services'

type ChangeThemeFormProps = Record<string, never>

export const ChangeThemeForm: React.FC<ChangeThemeFormProps> = () => {
  const { t } = useTranslation()

  const { theme, themes, setTheme } = useTheme()

  const { register, setValue } = useForm<UpdateProfileData>()

  useEffect(() => {
    setValue('theme', theme)
  }, [theme, setValue])

  const updateMutation = useMutation({
    mutationFn: (data: UpdateProfileMutation) =>
      ProfileService.updateProfile(data),
    onSuccess: () => {},
    onError: (error: ClientError) => {
      log.error(error)
      if (error.response.errors) {
        for (const err of error.response.errors) {
          log.error(err.message)
        }
      }
    },
  })

  const handleChangeTheme = async (e: ChangeEvent<HTMLSelectElement>) => {
    const theme = e.target.value
    setTheme(theme)

    const mutationData: UpdateProfileMutation = {
      data: {
        theme,
      },
    }

    updateMutation.mutate(mutationData)
  }

  return (
    <form className="w-96">
      <div className="mb-4">
        <label className="block text-xl font-bold mb-2" htmlFor="email">
          {t('common.label.changeTheme')}
        </label>
        <select
          {...register('theme')}
          className="select select-bordered w-full max-w-xs capitalize"
          onChange={handleChangeTheme}
        >
          {themes.map((theme: string, index: number) => (
            <option key={index} value={theme} className="p-5">
              {theme}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}
