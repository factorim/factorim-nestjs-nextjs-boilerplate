export const truncate = (str: string | undefined, step = 5) => {
  if (!str) return 'N/A'

  return str.length > step ? str.substring(0, step).concat('...') : str
}

export const middleTruncate = (str: string | undefined, step = 5) => {
  if (!str) return 'N/A'
  if (str.length <= step + 2) return str
  return (
    str.substring(0, step) +
    '...' +
    str.substring(str.length - step, str.length)
  )
}
