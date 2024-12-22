interface NumberFormatProps {
  className?: string
  format?: Intl.NumberFormatOptions
  value: number
}

export function NumberFormat({ className, format = {}, value }: Readonly<NumberFormatProps>) {
  const formatter = new Intl.NumberFormat('de-DE', {
    maximumFractionDigits: 2,
    ...format,
  })

  return <span className={className}>{formatter.format(value)}</span>
}
