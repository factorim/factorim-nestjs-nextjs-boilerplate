'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { ModalProvider } from '@/contexts'
import Header from '@/components/layouts/Header'
import Loading from '@/components/layouts/Loading'
import Sidebar from '@/components/layouts/Sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect('/signin')
    }
  }, [status])

  if (status === 'loading' || status === 'unauthenticated') return <Loading />

  return (
    <ModalProvider>
      <div className="h-screen flex">
        <div className="p-4">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col pt-4 pr-4">
          <Header />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </ModalProvider>
  )
}

export default DashboardLayout
