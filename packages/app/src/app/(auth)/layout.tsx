'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

import { config } from '@/config/configClient'
import image from '@/images/logos/factorim-logo.png'
import Loading from '@/components/layouts/Loading'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession()

  if (status === 'loading') return <Loading />

  return (
    <main className="flex-1 overflow-y-auto pt-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <Link
            href={{
              pathname: '/',
            }}
            passHref
            className="flex flex-col items-center"
          >
            <Image
              src={image}
              alt={`${config.name} Logo`}
              width="50"
              height="50"
              className="mx-auto"
              priority
            />
          </Link>
        </div>
        <div className="navbar-end"></div>
      </div>

      {children}
    </main>
  )
}

export default AuthLayout
