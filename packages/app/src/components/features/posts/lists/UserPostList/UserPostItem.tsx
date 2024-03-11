import { useContext } from 'react'
import { format } from 'date-fns'
import { MdEdit } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import { Post } from '@/types'
import { ModalContext } from '@/contexts'
import { truncate } from '@/utils/format'
import { StatusDisplay } from '@/components/widgets/ui'
import { enabledDisabledConfig } from '@/constants/display'
import UpdatePost from '../../forms/UpdatePostForm'
import { UserPostView } from '../../views'

type DappListProps = {
  post: Post
}

const PostItem: React.FC<DappListProps> = ({ post }) => {
  const { t } = useTranslation()
  const { handleShow } = useContext(ModalContext)

  return (
    <tr className="hover">
      <th className="font-medium">{post.title}</th>
      <td>{truncate(post.content, 42)}</td>
      <td>
        <StatusDisplay
          enumValue={post.enabled}
          config={enabledDisabledConfig}
        />
      </td>
      <td>{format(Date.parse(post.createdAt), 'MM/dd/yyyy HH:mm')}</td>
      <td>
        <div className="flex flex-wrap gap-2">
          <button
            className="btn btn-outline btn-xs flex flex-nowrap w-fit"
            onClick={() => handleShow(<UserPostView id={post.id} />)}
          >
            <MdEdit className="text-md" />
            {t('common.action.view')}
          </button>
          <button
            className="btn btn-outline btn-xs flex flex-nowrap w-fit"
            onClick={() => handleShow(<UpdatePost id={post.id} />)}
          >
            <MdEdit className="text-md" />
            {t('common.action.edit')}
          </button>
        </div>
      </td>
    </tr>
  )
}

export default PostItem
