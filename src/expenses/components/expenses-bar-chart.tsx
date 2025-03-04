'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/shared/components/chart'

import { barChartConfig } from '../constants/mock-data'

export function ExpensesBarChart({ data }: { data: { month: string; amount: number }[] }) {
  return (
    <ChartContainer config={barChartConfig}>
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          axisLine={false}
          dataKey='month'
          // tickFormatter={(value: string) => value.slice(0, 3)}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          axisLine={false}
          dataKey='amount'
          tickFormatter={(value: number) => `$${value.toLocaleString()}`}
          tickLine={false}
          tickMargin={10}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
        <Bar dataKey='amount' fill='var(--color-amount)' radius={8} />
      </BarChart>
    </ChartContainer>
  )
}
