import Link from 'next/link'
import { MdEmail, MdGroups, MdLibraryBooks, MdSend } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import classNames from 'classnames'

type SidebarProps = Record<string, never>

type MenuItem = {
  url: string
  title: string
  icon: JSX.Element
  isActive: boolean
}

type Menu = MenuItem[]

export const menu: Menu = [
  {
    url: '/admin/posts',
    title: 'navigation.posts',
    icon: (
      <MdLibraryBooks className="text-3xl mb-1 opacity-60 hover:opacity-100" />
    ),
    isActive: true,
  },
  {
    url: '/admin/users',
    title: 'navigation.users',
    icon: <MdGroups className="text-3xl mb-1 opacity-60 hover:opacity-100" />,
    isActive: false,
  },
  {
    url: '/admin/email-templates',
    title: 'navigation.emailTemplates',
    icon: <MdEmail className="text-3xl mb-1 opacity-60 hover:opacity-100" />,
    isActive: false,
  },
  {
    url: '/admin/email-validations',
    title: 'navigation.emailValidations',
    icon: <MdSend className="text-3xl mb-1 opacity-60 hover:opacity-100" />,
    isActive: false,
  },
]

const Sidebar: React.FC<SidebarProps> = () => {
  const pathname = usePathname()
  const { t } = useTranslation()

  return (
    <div className="flex flex-col justify-center items-center w-24 h-full p-2 text-center bg-base-300 rounded-lg">
      <ul className="space-y-6">
        {menu.map((item, index: number) => (
          <li key={index}>
            <Link
              href={{
                pathname: item.url,
              }}
              passHref
              className={classNames('flex flex-col items-center', {
                'text-blue-500 bg-base-200 rounded-xl': pathname === item.url,
              })}
            >
              {item.icon}
              <span className="text-xs">{t(item.title)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
