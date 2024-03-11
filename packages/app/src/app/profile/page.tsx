'use client'

import { MetaTitle } from '@/components/widgets/ui'
import { Title } from '@/components/widgets/typography'
import {
  ChangeEmail,
  ChangeLangForm,
  ChangeNameForm,
  ChangePasswordForm,
  ChangeThemeForm,
  DeleteAccount,
} from '@/components/features/profile'
import { DeleteAccountProvider } from '@/components/features/profile/DeleteAccount/contexts/DeleteAccountContext'

const title = 'Profile'

const ProfilePage: React.FC = () => {
  return (
    <main className="flex-1 p-4">
      <MetaTitle title={title} />
      <Title title="Profile" />
      <div className="p-4 flex">
        <ChangeNameForm />
      </div>
      <div className="p-4 flex">
        <ChangeEmail />
      </div>
      <div className="p-4 flex">
        <ChangeThemeForm />
      </div>
      <div className="p-4 flex">
        <ChangeLangForm />
      </div>
      <div className="p-4 flex">
        <ChangePasswordForm />
      </div>
      <div className="p-4 flex">
        <DeleteAccountProvider>
          <DeleteAccount />
        </DeleteAccountProvider>
      </div>
    </main>
  )
}

export default ProfilePage
