import React, { useState } from 'react'

export enum ChangeEmailStep {
  START = 'start',
  REQUEST = 'request',
  VERIFY = 'verify',
}

interface ChangeEmailContextData {
  step: ChangeEmailStep
  newEmail: string | null
  token: string
  setStep: (step: ChangeEmailStep) => void
  setNewEmail: (newEmail: string) => void
  setToken: (token: string) => void
}

export const ChangeEmailContext = React.createContext(
  {} as ChangeEmailContextData,
)

type ChangeEmailProviderProps = {
  children: React.ReactNode
}

export const ChangeEmailProvider: React.FC<ChangeEmailProviderProps> = ({
  children,
}) => {
  const [step, setStep] = useState<ChangeEmailStep>(ChangeEmailStep.START)
  const [newEmail, setNewEmail] = useState<string | null>(null)
  const [token, setToken] = useState<string>('')

  return (
    <ChangeEmailContext.Provider
      value={{
        step,
        newEmail,
        token,
        setStep,
        setNewEmail,
        setToken,
      }}
    >
      {children}
    </ChangeEmailContext.Provider>
  )
}
