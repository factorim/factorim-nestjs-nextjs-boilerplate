import { DisplayConfig, Option } from '@/types'

export const getDisplayOptions = (
  config: DisplayConfig,
  includeAll: boolean = true,
): Option[] => {
  const options = Object.entries(config).map(([value, { label }]) => ({
    value,
    label,
  }))

  if (includeAll) {
    options.unshift({ value: '', label: 'common.label.all' })
  }

  return options
}
