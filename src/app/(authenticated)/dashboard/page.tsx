import { ExpensesBarChart } from '@/expenses/components/expenses-bar-chart'
import { NewExpenseDialog } from '@/expenses/components/new-expense-dialog'
import { SummaryCard } from '@/expenses/components/summary-card'
import {
  type ExpenseCategory,
  generateColor,
  pieChartConfig,
  pieChartData,
} from '@/expenses/constants/mock-data'
import { getSummaryCardsData } from '@/expenses/functions/get-summary-cards-data'
import { NewIncomeDialog } from '@/incomes/components/new-income-dialog'
import { getSummary } from '@/movements/services/get-summary'
import { Button } from '@/shared/components/button'
import { Card, CardContent } from '@/shared/components/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/shared/components/chart'
import { cn } from '@/shared/functions/cn'
import { Cell, Pie, PieChart } from '@/shared/lib/recharts'

export default async function Dashboard() {
  const summary = await getSummary()

  return (
    <main className='min-h-screen w-full p-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {Object.values(getSummaryCardsData(summary.data!)).map((card, index) => (
          <SummaryCard
            className={cn({ 'border-primary bg-primary': index === 0 })}
            key={card.title}
            {...card}
          />
        ))}
        <Card>
          <CardContent className='flex flex-col gap-4 p-4'>
            <NewExpenseDialog>
              <Button variant='default'>Add expense</Button>
            </NewExpenseDialog>
            <NewIncomeDialog>
              <Button variant='outline'>Add income</Button>
            </NewIncomeDialog>
          </CardContent>
        </Card>
      </div>
      <div className='mt-4 flex gap-4'>
        <Card className='w-2/3 p-4'>
          <ExpensesBarChart />
        </Card>
        <Card className='w-1/3 p-4'>
          <ChartContainer className='mx-auto aspect-square max-h-[250px]' config={pieChartConfig}>
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
              <Pie
                data={Object.entries(pieChartData).map(([category, transactions]) => ({
                  category,
                  transactions,
                }))}
                dataKey='transactions'
                fill='#8884d8'
                innerRadius={60}
                nameKey='category'
                strokeWidth={5}
              >
                {Object.entries(pieChartData).map(([category], index) => (
                  <Cell
                    fill={
                      pieChartConfig.transactions.colors[category as ExpenseCategory] ||
                      generateColor(index)
                    }
                    key={category}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </Card>
      </div>
    </main>
  )
}
