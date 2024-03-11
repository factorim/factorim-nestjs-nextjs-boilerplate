import { useContext } from 'react'
import { Modal } from 'react-daisyui'
import { format } from 'date-fns'
import { useTranslation } from 'react-i18next'

import { useUserPost } from '@/hooks'
import { ModalContext } from '@/contexts'
import { StatusDisplay } from '@/components/widgets/ui'
import { enabledDisabledConfig } from '@/constants/display'
import UpdatePost from '../forms/UpdatePostForm'

type UserPostViewProps = {
  id: string
}

const UserPostView: React.FC<UserPostViewProps> = ({ id }) => {
  const { t } = useTranslation()
  const { handleShow } = useContext(ModalContext)
  const { post } = useUserPost(id)

  return (
    <div>
      <Modal.Header className="font-bold">Post</Modal.Header>
      <div className="form-control">
        <label htmlFor="enabled" className="label">
          {t('post.label.title')}
        </label>
        {post?.title}
      </div>
      <div className="form-control">
        <label htmlFor="enabled" className="label">
          {t('post.label.content')}
        </label>
        {post?.content}
      </div>
      <div className="form-control">
        <label htmlFor="enabled" className="label">
          {t('common.label.enabled')}
        </label>
        {post && (
          <StatusDisplay
            enumValue={post.enabled}
            config={enabledDisabledConfig}
            responsive={false}
          />
        )}
      </div>
      <div className="form-control">
        <label htmlFor="enabled" className="label">
          {t('common.label.createdAt')}
        </label>
        {post?.createdAt &&
          format(Date.parse(post.createdAt), 'MM/dd/yyyy HH:mm')}
      </div>
      <div className="form-control">
        <label htmlFor="enabled" className="label">
          {t('common.label.updatedAt')}
        </label>
        {post?.updatedAt &&
          format(Date.parse(post.updatedAt), 'MM/dd/yyyy HH:mm')}
      </div>

      {post && (
        <div className="space-x-5 flex justify-end mt-4">
          <button
            type="submit"
            className="btn btn-accent btn-outline"
            onClick={() => handleShow(<UpdatePost id={post.id} />)}
          >
            {t('common.action.edit')}
          </button>
        </div>
      )}
    </div>
  )
}

export default UserPostView
