import { signIn } from 'next-auth/react'
import { useTranslation } from 'react-i18next'

type GoogleOAuthProps = {
  label: string
}

const GoogleOAuth: React.FC<GoogleOAuthProps> = ({ label }) => {
  const { t } = useTranslation()

  return (
    <div className="w-full">
      <button
        className="btn w-full"
        onClick={() => signIn('google', { callbackUrl: '/' })}
      >
        {t(label)}
      </button>
    </div>
  )
}

export default GoogleOAuth
