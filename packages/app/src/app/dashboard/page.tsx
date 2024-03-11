'use client'

import { useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { PostFilter } from '@/types'
import { Title } from '@/components/widgets/typography'
import { MetaTitle } from '@/components/widgets/ui'
import {
  UserPostList,
  UserPostMenuForm,
} from '@/components/features/posts/lists'
import { parseFilterParams, parsePaginationOffset } from '@/utils/url'
import { usePostStore } from '@/hooks'

const title = 'Dashboard'

type DashboardPageProps = Record<string, never>

const DashboardPage: React.FC<DashboardPageProps> = () => {
  const { data: session } = useSession()

  const itemsPerPage = usePostStore((state) => state.itemsPerPage)
  const searchParams = useSearchParams()

  const pagination = parsePaginationOffset(searchParams, itemsPerPage)
  const filterStructure: PostFilter = { keyword: undefined, enabled: undefined }
  const filters = parseFilterParams(searchParams, filterStructure)

  return (
    <main className="flex-1 overflow-y-auto p-4">
      <MetaTitle title={title} />
      <Title title={`Hello ${session?.user?.name}`} />
      <div className="flex flex-col gap-8">
        <UserPostMenuForm filters={filters} />
        <UserPostList pagination={pagination} filters={filters} />
      </div>
    </main>
  )
}

export default DashboardPage
