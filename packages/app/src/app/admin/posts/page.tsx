'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { PostFilter } from '@/types'
import { usePostStore } from '@/hooks'
import { Title } from '@/components/widgets/typography'
import { MetaTitle } from '@/components/widgets/ui'
import { PostList, PostMenuForm } from '@/components/features/posts/lists'
import { parseFilterParams, parsePaginationOffset } from '@/utils/url'

const title = 'navigation.posts'

const AdminPostsPage: React.FC = () => {
  const { t } = useTranslation()
  const pathname = usePathname()
  const itemsPerPage = usePostStore((state) => state.itemsPerPage)
  const searchParams = useSearchParams()

  const pagination = parsePaginationOffset(searchParams, itemsPerPage)
  const filterStructure: PostFilter = { keyword: undefined, enabled: undefined }
  const filters = parseFilterParams(searchParams, filterStructure)

  // Store query
  const setQueryParams = usePostStore((state) => state.setQueryParams)
  useEffect(() => {
    setQueryParams(pathname, pagination, filters)
  }, [pathname, pagination, filters, setQueryParams])

  return (
    <main className="flex-1 overflow-y-auto p-4">
      <MetaTitle title={t(title)} />
      <Title title={t(title)} />
      <div className="flex flex-col gap-8">
        <PostMenuForm filters={filters} />
        <PostList pagination={pagination} filters={filters} />
      </div>
    </main>
  )
}

export default AdminPostsPage
