import { NUMBER_FORMAT } from '../constants/number-format'

export const removeNumberFormat = (value: string): number => {
  const formattedValue = value
    .replace(NUMBER_FORMAT.thousandSeparator, '')
    .replace(NUMBER_FORMAT.decimalSeparator, '.')

  return Number(formattedValue)
}
