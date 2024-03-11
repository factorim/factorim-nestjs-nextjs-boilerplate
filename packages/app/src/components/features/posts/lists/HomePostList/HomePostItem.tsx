import { format } from 'date-fns'
import { useTranslation } from 'react-i18next'

import { Post } from '@/types'

type PostItemProps = {
  post: Post
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const { t } = useTranslation()

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.content}</p>
        <div className="card-actions justify-end text-xs">
          <p>
            {t('common.label.createdAt')}:{' '}
            {format(Date.parse(post.createdAt), 'MM/dd/yyyy HH:mm')}
          </p>
          <p>
            {t('post.label.author')}: {post.author.name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostItem
