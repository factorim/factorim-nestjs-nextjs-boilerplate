'use client'

import { useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { UserFilter } from '@/types'
import { useUserStore } from '@/hooks'
import { UserList } from '@/components/features/users/lists'
import { Title } from '@/components/widgets/typography'
import { MetaTitle } from '@/components/widgets/ui'
import { parseFilterParams, parsePaginationOffset } from '@/utils/url'
import UserMenuForm from '@/components/features/users/lists/UserMenuForm'

const title = 'navigation.users'

const AdminUsersPage: React.FC = () => {
  const { t } = useTranslation()
  const itemsPerPage = useUserStore((state) => state.itemsPerPage)
  const searchParams = useSearchParams()

  const pagination = parsePaginationOffset(searchParams, itemsPerPage)
  const filterStructure: UserFilter = { keyword: undefined, status: undefined }
  const filters = parseFilterParams(searchParams, filterStructure)

  return (
    <main className="flex-1 overflow-y-auto p-4">
      <MetaTitle title={t(title)} />
      <Title title={t(title)} />
      <div className="flex flex-col gap-8">
        <UserMenuForm filters={filters} />
        <UserList pagination={pagination} filters={filters} />
      </div>
    </main>
  )
}

export default AdminUsersPage
