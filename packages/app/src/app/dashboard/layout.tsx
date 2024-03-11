'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { ModalProvider } from '@/contexts'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
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
    <ModalProvider>
      <div className="flex flex-col h-screen">
        <div className="flex-1 flex flex-col mx-auto w-full max-w-[1024px]">
          <Header />
          <main className="flex-1 p-4">{children}</main>
        </div>
        <Footer />
      </div>
    </ModalProvider>
  )
}

export default DashboardLayout
