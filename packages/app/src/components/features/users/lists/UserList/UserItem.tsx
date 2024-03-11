'use client'

import { useContext } from 'react'
import { format } from 'date-fns'
import { MdEdit } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import { User, UserRole } from '@/types'
import { ModalContext } from '@/contexts'
import { StatusDisplay } from '@/components/widgets/ui'
import { userStatusConfig } from '@/constants/display'
import UpdateUserForm from '../../forms/UpdateUserForm'

type UserItemProps = {
  user: User
  index: number
}

const UserItem: React.FC<UserItemProps> = ({ user, index }) => {
  const { t } = useTranslation()
  const { handleShow } = useContext(ModalContext)

  return (
    <tr>
      <td className="text-xs">{index}</td>
      <th className="font-medium">{user.email}</th>
      <td className="space-x-2">
        {user.roles.map((role: UserRole, index: number) => (
          <span key={index}>{role}</span>
        ))}
      </td>
      <td>{user.lang}</td>
      <td>{user.theme}</td>
      <td>
        <StatusDisplay enumValue={user.status} config={userStatusConfig} />
      </td>
      <td>{format(Date.parse(user.createdAt), 'MM/dd/yyyy HH:mm')}</td>
      <td>
        <div className="space-x-4">
          <button
            className="btn btn-outline btn-sm flex flex-nowrap w-fit"
            onClick={() => handleShow(<UpdateUserForm id={user.id} />)}
          >
            <MdEdit className="text-md" />
            {t('common.action.edit')}
          </button>
        </div>
      </td>
    </tr>
  )
}

export default UserItem
