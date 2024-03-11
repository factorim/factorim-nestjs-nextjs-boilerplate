import React, { useState } from 'react'

export enum SignUpStep {
  REQUEST = 'request',
  VERIFY = 'verify',
}

interface SignUpContextData {
  step: SignUpStep
  email: string | null
  token: string
  setStep: (step: SignUpStep) => void
  setEmail: (email: string) => void
  setToken: (token: string) => void
}

export const SignUpContext = React.createContext({} as SignUpContextData)

type SignUpProviderProps = {
  children: React.ReactNode
}

export const SignUpProvider: React.FC<SignUpProviderProps> = ({ children }) => {
  const [step, setStep] = useState<SignUpStep>(SignUpStep.REQUEST)
  const [email, setEmail] = useState<string | null>(null)
  const [token, setToken] = useState<string>('')

  return (
    <SignUpContext.Provider
      value={{ step, email, token, setStep, setToken, setEmail }}
    >
      {children}
    </SignUpContext.Provider>
  )
}
