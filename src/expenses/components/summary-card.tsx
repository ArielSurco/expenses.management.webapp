import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/components/card'
import { NumberFormat } from '@/shared/components/number-format'
import { cn } from '@/shared/functions/cn'

interface SummaryCardProps {
  className?: string
  relativePercentage: number
  relativePercentageLabel: string
  title: string
  value: number
}

export function SummaryCard({
  className,
  title,
  value,
  relativePercentage,
  relativePercentageLabel,
}: Readonly<SummaryCardProps>) {
  return (
    <Card className={cn('flex flex-col gap-2 p-4', className)}>
      <CardHeader className='p-0'>
        <CardTitle className='text-base font-semibold'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <div className='text-2xl font-bold'>
          <span>$</span>
          <NumberFormat
            format={{
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }}
            value={value}
          />
        </div>
      </CardContent>
      <CardFooter className='p-0'>
        <div className='text-sm'>
          {relativePercentage}% {relativePercentageLabel}
        </div>
      </CardFooter>
    </Card>
  )
}
