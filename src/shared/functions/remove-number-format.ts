import { NUMBER_FORMAT } from '../constants/number-format'

export const removeNumberFormat = (value: string): number => {
  const stringValue = value.split(' ').at(-1)

  const formattedValue = stringValue
    ?.replace(NUMBER_FORMAT.thousandSeparator, '')
    .replace(NUMBER_FORMAT.decimalSeparator, '.')

  return Number(formattedValue)
}
