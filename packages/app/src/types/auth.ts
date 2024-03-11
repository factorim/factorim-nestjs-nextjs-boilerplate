export type AuthUser = {
  id: string
  email: string
  roles: string[]
  lang: string
  theme: string
}

export type Token = {
  accessToken: string
  accessTokenExp: number
  refreshToken: string
}

export interface JWT {
  id: string
  email: string
  name: string
  roles: string[]
  iat: number
  exp: number
}

// Sign In

export type SignIn = {
  email: string
  password: string
  options?: {
    redirectTo?: string
  }
}

export type SignInFormValues = {
  email: string
  password: string
}

export type SignInResponse = {
  signin: Token
}

export type SignInGoogleResponse = {
  signinGoogle: Token
}

// Refresh Token

export type RefreshTokenResponse = {
  refreshToken: Token
}

// Change Password

export type ChangePasswordFormValues = {
  password: string
  newPassword: string
}

export type ChangePasswordData = {
  password: string
  newPassword: string
}

export type ChangePasswordMutation = {
  data: ChangePasswordData
}

export type ChangePasswordResponse = {
  changePassword: boolean
}

// Reset Password Request

export type ResetPasswordRequest = {
  token: string
  email: string
}

export type ResetPasswordRequestFormValues = {
  email: string
}

export type ResetPasswordRequestData = {
  email: string
}

export type ResetPasswordRequestMutation = {
  data: ResetPasswordRequestData
}

export type ResetPasswordRequestResponse = {
  resetPasswordRequest: ResetPasswordRequest
}

// Reset Password

export type ResetPasswordFormValues = {
  password: string
}

export type ResetPasswordData = {
  token: string
  password: string
}

export type ResetPasswordMutation = {
  data: ResetPasswordData
}

export type ResetPasswordResponse = {
  resetPassword: boolean
}

// Sign Up Request

export type SignUpRequest = {
  email: string
  token: string
}

export type SignUpRequestFormValues = {
  email: string
}

export type SignUpRequestData = {
  email: string
  lang: string
}

export type SignUpRequestMutation = {
  data: SignUpRequestData
}

export type SignUpRequestResponse = {
  signupRequest: SignUpRequest
}

// Sign Up

export type SignUp = {
  accessToken: string
  refreshToken: string
  user: AuthUser
}

export type SignUpFormValues = {
  token: string
  code: string
  name: string
  password: string
}

export type SignUpData = {
  token: string
  code: string
  name: string
  password: string
}

export type SignUpMutation = {
  data: SignUpData
}

export type SignUpResponse = {
  signup: SignUp
}
