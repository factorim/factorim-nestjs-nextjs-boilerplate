import { useTranslation } from 'react-i18next'
import { ZxcvbnResult } from '@zxcvbn-ts/core'

type PasswordStrengthProps = {
  pwdStrength: ZxcvbnResult | null
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({
  pwdStrength,
}) => {
  const { t } = useTranslation()

  const getStength = (score: number) => {
    switch (score) {
      case 0:
        return <span className="text-error">{t('user.label.weak')}</span>
      case 1:
        return <span className="text-error">{t('user.label.weak')}</span>
      case 2:
        return <span className="text-warning">{t('user.label.fair')}</span>
      case 3:
        return <span className="text-success">{t('user.label.good')}</span>
      case 4:
        return <span className="text-success">{t('user.label.strong')}</span>
    }
  }

  return (
    <div>
      {pwdStrength && (
        <div className="pt-2 text-sm">
          {t('user.label.passwordStrength')}: {getStength(pwdStrength.score)}
        </div>
      )}
    </div>
  )
}
