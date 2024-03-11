import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import {
  DeleteAccountContext,
  DeleteAccountStep,
} from './contexts/DeleteAccountContext'
import DeleteAccountRequest from './DeleteAccountRequest'
import DeleteAccountVerifyForm from './DeleteAccountVerifyForm'

type DeleteAccountProps = Record<string, never>

export const DeleteAccount: React.FC<DeleteAccountProps> = () => {
  const { t } = useTranslation()

  const context = useContext(DeleteAccountContext)
  const { step, setStep } = context

  const DeleteAccountInit = () => (
    <button
      type="submit"
      className="btn"
      onClick={() => setStep(DeleteAccountStep.REQUEST)}
    >
      {t('user.label.deleteAccount')}
    </button>
  )

  type StepComponentsType = {
    [key in DeleteAccountStep]: React.ElementType
  }

  const stepComponents: StepComponentsType = {
    [DeleteAccountStep.INIT]: DeleteAccountInit,
    [DeleteAccountStep.REQUEST]: DeleteAccountRequest,
    [DeleteAccountStep.CONFIRM]: DeleteAccountVerifyForm,
  }

  const CurrentStepComponent = stepComponents[step]

  return (
    <div className="mb-4">
      <label className="block text-xl font-bold mb-2" htmlFor="email">
        {t('user.label.deleteYourAccount')}
      </label>
      <CurrentStepComponent />
    </div>
  )
}
