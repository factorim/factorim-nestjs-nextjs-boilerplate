'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'

import Header from '@/components/layouts/Header'
import Loading from '@/components/layouts/Loading'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect('/signin')
    }
  }, [status])

  if (status === 'loading' || status === 'unauthenticated') return <Loading />

  return (
    <div className="max-w-[1024px] mx-auto h-screen flex">
      <div className="flex-1 flex flex-col pt-4 pr-4">
        <Header />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
