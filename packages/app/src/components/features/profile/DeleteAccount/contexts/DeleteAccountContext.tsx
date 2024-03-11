import React, { useState } from 'react'

export enum DeleteAccountStep {
  INIT = 'init',
  REQUEST = 'request',
  CONFIRM = 'confirm',
}

interface DeleteAccountContextData {
  step: DeleteAccountStep
  token: string
  setStep: (step: DeleteAccountStep) => void
  setToken: (token: string) => void
}

export const DeleteAccountContext = React.createContext(
  {} as DeleteAccountContextData,
)

type DeleteAccountProviderProps = {
  children: React.ReactNode
}

export const DeleteAccountProvider: React.FC<DeleteAccountProviderProps> = ({
  children,
}) => {
  const [step, setStep] = useState<DeleteAccountStep>(DeleteAccountStep.INIT)
  const [token, setToken] = useState<string>('')

  return (
    <DeleteAccountContext.Provider value={{ step, token, setStep, setToken }}>
      {children}
    </DeleteAccountContext.Provider>
  )
}
