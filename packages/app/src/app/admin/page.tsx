'use client'

import { MdGroups, MdLibraryBooks } from 'react-icons/md'

import { useAdminStats } from '@/hooks'
import { Title } from '@/components/widgets/typography'
import { MetaTitle } from '@/components/widgets/ui'

const title = 'Admin'

const AdminPage: React.FC = () => {
  const { stats } = useAdminStats()

  return (
    <main className="flex-1 overflow-y-auto p-4">
      <MetaTitle title={title} />
      <Title title={title} />
      <div className="flex flex-col gap-8">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <MdLibraryBooks className="text-3xl" />
            </div>
            <div className="stat-title">Posts</div>
            <div className="stat-value">{stats?.countPosts}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <MdGroups className="text-3xl" />
            </div>
            <div className="stat-title">Users</div>
            <div className="stat-value">{stats?.countUsers}</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AdminPage
