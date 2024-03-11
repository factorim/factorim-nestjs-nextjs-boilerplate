import { useTranslation } from 'react-i18next'

import { PaginationOffsetArgs, UserFilter } from '@/types'
import { useUsers, useUserStore } from '@/hooks'
import { PaginationOffset } from '@/components/widgets/pagination'
import { LoadingOverlay } from '@/components/widgets/ui'
import UserItem from './UserItem'
import { getIndex } from '@/utils/list'

type UserListProps = {
  pagination: PaginationOffsetArgs
  filters: UserFilter
}

const UserList: React.FC<UserListProps> = ({ pagination, filters }) => {
  const { t } = useTranslation()
  const { users, totalCount, isLoading } = useUsers({ pagination, filters })

  const setItemsPerPage = useUserStore((state) => state.setItemsPerPage)

  return (
    <div className="flex flex-col gap-8">
      <div className="relative overflow-x-auto min-h-40">
        <LoadingOverlay isLoading={isLoading} />
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="w-10">{t('common.label.index')}</th>
              <th>{t('user.label.email')}</th>
              <th>{t('user.label.roles')}</th>
              <th>{t('common.label.lang')}</th>
              <th>{t('common.label.theme')}</th>
              <th>{t('common.label.status')}</th>
              <th>{t('common.label.createdAt')}</th>
              <th>{t('common.label.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index: number) => (
              <UserItem
                key={index}
                index={getIndex(pagination.page, pagination.take, index)}
                user={user}
              />
            ))}
            {!isLoading && users.length === 0 && (
              <tr className="h-32">
                <td colSpan={8} className="text-center">
                  {t('user.label.noUsersFound')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <PaginationOffset
        pagination={pagination}
        total={totalCount}
        setItemsPerPage={(take: number) => setItemsPerPage(take)}
      />
    </div>
  )
}

export default UserList
