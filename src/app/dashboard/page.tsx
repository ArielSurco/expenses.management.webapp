import { SummaryCard } from '@/expenses/components/summary-card'
import { summaryCards } from '@/expenses/constants/mock-data'
import { Button } from '@/shared/components/button'
import { Card, CardContent } from '@/shared/components/card'
import { cn } from '@/shared/functions/cn'

export default function Dashboard() {
  return (
    <main className='min-h-screen w-full p-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {Object.values(summaryCards).map((card, index) => (
          <SummaryCard
            className={cn({ 'border-primary bg-primary': index === 0 })}
            key={card.title}
            {...card}
          />
        ))}
        <Card>
          <CardContent className='flex flex-col gap-4 p-4'>
            <Button variant='default'>Add expense</Button>
            <Button variant='outline'>Add income</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
