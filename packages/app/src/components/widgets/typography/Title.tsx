import classNames from 'classnames'

type TitleProps = {
  title: string
  className?: string
}

export const Title: React.FC<TitleProps> = ({
  title,
  className = 'text-4xl mb-14',
}) => {
  return (
    <div className={classNames('w-full text-center', className)}>{title}</div>
  )
}
