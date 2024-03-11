import { LoadingOverlay } from '@/components/widgets/ui'
import { useTranslation } from 'react-i18next'

import { PaginationOffsetArgs, PostFilter } from '@/types'
import { usePostStore, useUserPosts } from '@/hooks'
import PostItem from './UserPostItem'
import { PaginationOffset } from '@/components/widgets/pagination'

type UserPostListProps = {
  pagination: PaginationOffsetArgs
  filters: PostFilter
}

export const UserPostList: React.FC<UserPostListProps> = ({
  pagination,
  filters,
}) => {
  const { t } = useTranslation()
  const { posts, totalCount, isLoading } = useUserPosts({ pagination, filters })
  const setItemsPerPage = usePostStore((state) => state.setItemsPerPage)

  return (
    <div className="flex flex-col gap-8">
      <div className="relative overflow-x-auto min-h-40">
        <LoadingOverlay isLoading={isLoading} />
        <table className="table table-zebra mb-8">
          <thead>
            <tr>
              <th>{t('post.label.title')}</th>
              <th>{t('post.label.content')}</th>
              <th>{t('common.label.enabled')}</th>
              <th>{t('common.label.createdAt')}</th>
              <th>{t('common.label.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index: number) => (
              <PostItem key={index} post={post} />
            ))}
            {!isLoading && posts.length === 0 && (
              <tr className="h-32">
                <td colSpan={5} className="text-center">
                  {t('post.message.noPostsFound')}
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
