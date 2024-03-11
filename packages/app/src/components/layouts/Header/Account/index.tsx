import Link from 'next/link'
import { MdLogin, MdLogout, MdPerson } from 'react-icons/md'
import { signOut } from 'next-auth/react'
import { useTranslation } from 'react-i18next'

import Avatar from './Avatar'
import { useSession } from 'next-auth/react'

type AccountProps = Record<string, never>

const Account: React.FC<AccountProps> = () => {
  const { t } = useTranslation()
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return (
      <div className="dropdown dropdown-end z-10">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="avatar">
            <div className="w-10 rounded-full">
              {session?.user?.email && <Avatar seed={session.user.email} />}
            </div>
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-3 p-2 menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <ul>
            <li>
              <Link
                href={{
                  pathname: '/profile',
                }}
                passHref
              >
                <MdPerson className="text-2xl" /> {t('user.action.profile')}
              </Link>
            </li>
          </ul>
          <div className="divider"></div>
          <ul>
            <li>
              <a onClick={() => signOut({ callbackUrl: '/signin' })}>
                <MdLogout className="text-2xl" /> {t('user.action.logout')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-4">
      <Link
        href="/signin"
        passHref
        className="btn btn-primary btn-sm flex flex-nowrap w-fit"
      >
        <MdLogin className="text-lg mr-2" />
        {t('user.action.signIn')}
      </Link>
      <Link
        href="/signup"
        passHref
        className="btn btn-sm flex flex-nowrap w-fit"
      >
        {t('user.action.signUp')}
      </Link>
    </div>
  )
}

export default Account
