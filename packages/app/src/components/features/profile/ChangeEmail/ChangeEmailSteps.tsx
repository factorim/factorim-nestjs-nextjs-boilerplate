import { useContext } from 'react'

import {
  ChangeEmailContext,
  ChangeEmailStep,
} from './contexts/ChangeEmailContext'
import ChangeEmailStart from './ChangeEmailStart'
import ChangeEmailRequestForm from './ChangeEmailRequestForm'
import ChangeEmailVerifyForm from './ChangeEmailVerifyForm'

type StepComponentsType = {
  [key in ChangeEmailStep]: React.ElementType
}

type ChangeEmailStepsProps = Record<string, never>

const ChangeEmailSteps: React.FC<ChangeEmailStepsProps> = () => {
  const context = useContext(ChangeEmailContext)
  const { step } = context

  const stepComponents: StepComponentsType = {
    [ChangeEmailStep.START]: ChangeEmailStart,
    [ChangeEmailStep.REQUEST]: ChangeEmailRequestForm,
    [ChangeEmailStep.VERIFY]: ChangeEmailVerifyForm,
  }

  const CurrentStepComponent = stepComponents[step]

  return <CurrentStepComponent />
}

export default ChangeEmailSteps
