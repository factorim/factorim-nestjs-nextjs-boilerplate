import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MdAccountBalance, MdDashboard, MdHomeFilled } from 'react-icons/md'
import { useSession } from 'next-auth/react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { config } from '@/config/configClient'
import factorimLogo from '@/images/logos/factorim-logo.png'
import { UserRole } from '@/types'
import { hasRole } from '@/utils/auth'
import DarkLight from './DarkLight'
import Account from './Account'

type MenuItem = {
  url: string
  title: string
  icon: JSX.Element
  isActive: boolean
  requiredRoles?: UserRole[]
}

export const menu: MenuItem[] = [
  {
    url: '/',
    title: 'navigation.home',
    icon: (
      <MdHomeFilled className="text-xl mb-1 opacity-60 hover:opacity-100" />
    ),
    isActive: true,
  },
  {
    url: '/dashboard',
    title: 'navigation.dashboard',
    icon: <MdDashboard className="text-xl mb-1 opacity-60 hover:opacity-100" />,
    isActive: true,
    requiredRoles: [UserRole.USER],
  },
  {
    url: '/admin',
    title: 'navigation.admin',
    icon: (
      <MdAccountBalance className="text-xl mb-1 opacity-60 hover:opacity-100" />
    ),
    isActive: false,
    requiredRoles: [UserRole.ADMIN],
  },
]

type HeaderProps = Record<string, never>

const Header: React.FC<HeaderProps> = () => {
  const { data: session } = useSession()
  const { t } = useTranslation()

  const pathname = usePathname()

  const getBasePath = (path: string | undefined) => {
    if (!path) return ''
    const segments = path.split('/').filter(Boolean)
    return segments.length > 0 ? `/${segments[0]}` : path
  }

  const basePath = getBasePath(pathname)

  const isRoleAuthorized = (menuItem: MenuItem) => {
    if (!menuItem.requiredRoles) return true
    return hasRole(session, menuItem.requiredRoles)
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu.filter(isRoleAuthorized).map((item, index: number) => (
              <li key={index}>
                <Link
                  href={{
                    pathname: item.url,
                  }}
                  passHref
                  className={classNames('flex flex-col items-center', {
                    'text-blue-500': basePath === item.url,
                  })}
                >
                  {item.icon}
                  <span className="text-xs">{t(item.title)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={{
            pathname: '/',
          }}
          passHref
          className="flex flex-col items-center"
        >
          <Image
            src={factorimLogo}
            alt={`${config.name} Logo`}
            width="50"
            height="50"
            className="mx-auto"
            priority
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menu.filter(isRoleAuthorized).map((item, index: number) => (
            <li key={index}>
              <Link
                href={{
                  pathname: item.url,
                }}
                passHref
                className={classNames('flex flex-row items-center', {
                  'text-blue-500': basePath === item.url,
                })}
              >
                {item.icon}
                <span className="text-xs">{t(item.title)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <DarkLight />
        <Account />
      </div>
    </div>
  )
}

export default Header
