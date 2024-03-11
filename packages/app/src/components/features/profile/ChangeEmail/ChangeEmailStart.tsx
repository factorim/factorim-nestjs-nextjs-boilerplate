import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import {
  ChangeEmailContext,
  ChangeEmailStep,
} from './contexts/ChangeEmailContext'

type ChangeEmailStartProps = Record<string, never>

const ChangeEmailStart: React.FC<ChangeEmailStartProps> = () => {
  const { t } = useTranslation()

  const context = useContext(ChangeEmailContext)
  const { setStep } = context

  return (
    <button className="btn" onClick={() => setStep(ChangeEmailStep.REQUEST)}>
      {t('common.action.change')}
    </button>
  )
}

export default ChangeEmailStart
