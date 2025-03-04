import dayjs from 'dayjs'

import { type GetSummarySuccessResponse } from '@/movements/services/get-summary'

interface MonthData {
  label: string
  month: number
  year: number
}

interface ChartDataPoint {
  month: string
  amount: number
}

const getLast12Months = (): MonthData[] => {
  return Array.from({ length: 12 }, (_, index) => {
    const date = dayjs().subtract(11 - index, 'month')
    return {
      label: date.format('MMM/YY'),
      month: parseInt(date.format('MM')),
      year: parseInt(date.format('YYYY')),
    }
  })
}

export const getBarChartData = (summaryResponse: GetSummarySuccessResponse): ChartDataPoint[] => {
  const monthsData = getLast12Months()

  return monthsData.map((monthData): ChartDataPoint => {
    const summary = summaryResponse.find(
      (item) => item.month === monthData.month && item.year === monthData.year,
    )

    return {
      month: monthData.label,
      amount: summary?.expenses ?? 0,
    }
  })
}
