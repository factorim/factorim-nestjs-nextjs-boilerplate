import { useContext } from 'react'

import { SignUpContext, SignUpStep } from './contexts/SignUpContext'
import SignUpRequestForm from './SignUpRequestForm'
import SignUpVerifyForm from './SignUpVerifyForm'

type StepComponentsType = {
  [key in SignUpStep]: React.ElementType
}

type SignUpStepsProps = Record<string, never>

const SignUpSteps: React.FC<SignUpStepsProps> = () => {
  const context = useContext(SignUpContext)
  const { step } = context

  const stepComponents: StepComponentsType = {
    [SignUpStep.REQUEST]: SignUpRequestForm,
    [SignUpStep.VERIFY]: SignUpVerifyForm,
  }

  const CurrentStepComponent = stepComponents[step]

  return <CurrentStepComponent />
}

export default SignUpSteps
