export type Profile = {
  lang: string
  theme: string
}

// Update
// ------

// Form

export type UpdateProfileFormValues = {
  name?: string
  lang?: string
  theme?: string
}

export type ChangeEmailRequestFormValues = {
  email: string
}

export type ChangeEmailFormValues = {
  code: string
}

// Mutation

export type UpdateProfileData = {
  name?: string
  lang?: string
  theme?: string
}

export type UpdateProfileMutation = {
  data: UpdateProfileData
}

export type ChangeEmailRequestData = {
  email: string
}

export type ChangeEmailRequestMutation = {
  data: ChangeEmailRequestData
}

export type ChangeEmailData = {
  token: string
  code: string
}

export type ChangeEmailMutation = {
  data: ChangeEmailData
}

// Response

export type UpdateProfileResponse = {
  updateProfile: Profile
}

export type ChangeEmailRequestResponse = {
  changeEmailRequest: string
}

export type ChangeEmailResponse = {
  changeEmail: string
}

// Delete
// ------

// Form

export type DeleteProfileFormValues = {
  token: string
  code: string
}

// Mutation

export type DeleteProfileData = {
  token: string
  code: string
}

export type DeleteProfileMutation = {
  data: DeleteProfileData
}

// Response

export type RequestDeleteProfileResponse = {
  requestDeleteProfile: string
}

export type DeleteProfileResponse = {
  deleteProfile: Profile
}
