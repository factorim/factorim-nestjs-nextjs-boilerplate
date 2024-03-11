import { useTranslation } from 'react-i18next'
import { useSession } from 'next-auth/react'

import { useMe } from '@/hooks'
import { UserAuth } from '@/types'
import { ChangeEmailProvider } from './contexts/ChangeEmailContext'
import ChangeEmailSteps from './ChangeEmailSteps'

type ChangeEmailProps = Record<string, never>

export const ChangeEmail: React.FC<ChangeEmailProps> = () => {
  const { t } = useTranslation()
  const { data: session } = useSession()

  const { me } = useMe()

  return (
    <ChangeEmailProvider>
      <div className="w-96">
        <div className="mb-4">
          <label className="block text-xl font-bold mb-2" htmlFor="email">
            {t('user.label.email')}
          </label>
          {session?.user?.email}
        </div>
        {me?.auth === UserAuth.CREDENTIALS && <ChangeEmailSteps />}
      </div>
    </ChangeEmailProvider>
  )
}
