import { FieldErrors } from 'react-hook-form'

export type ServerErrorAlertProps = {
  errors: FieldErrors
}

export const ServerErrorAlert: React.FC<ServerErrorAlertProps> = ({
  errors,
}) => {
  return (
    <>
      {errors?.root?.serverError && (
        <div className="text-error mt-4">{errors.root.serverError.message}</div>
      )}
    </>
  )
}
