'use client'

import { useSession } from 'next-auth/react'

import Header from '@/components/layouts/Header'
import Loading from '@/components/layouts/Loading'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession()

  if (status === 'loading') return <Loading />

  return (
    <div className="max-w-[1024px] mx-auto h-screen flex">
      <div className="flex-1 flex flex-col pt-4 pr-4">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  )
}

export default HomeLayout
