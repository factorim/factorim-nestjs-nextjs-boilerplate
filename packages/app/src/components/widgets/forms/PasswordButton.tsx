import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { MdRemoveRedEye } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

type PasswordButtonProps = {
  name?: string
  placeholder?: string
  required?: string
  show?: boolean
}

export const PasswordButton = ({
  name = 'password',
  placeholder,
  required = 'user.message.addPassword',
  show = true,
}: PasswordButtonProps) => {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState(false)

  const { register } = useFormContext()

  return (
    <div className="join w-full">
      <input
        {...register(name, { required: t(required) })}
        className="input input-bordered w-full"
        id="password"
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
      />
      {show && (
        <button
          className={classNames('btn btn-ghost join-item rounded-r-full', {
            'btn-link': showPassword,
          })}
          onClick={(e) => {
            e.preventDefault()
            setShowPassword(!showPassword)
          }}
        >
          <MdRemoveRedEye className="text-2xl" />
        </button>
      )}
    </div>
  )
}
