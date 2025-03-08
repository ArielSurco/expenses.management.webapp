import { type GetSummarySuccessResponse } from '@/movements/services/get-summary'
import { getRelativePercentage } from '@/shared/functions/get-relative-percentage'

export const getSummaryCardsData = (summaryResponse: GetSummarySuccessResponse) => {
  const currentMonth = summaryResponse.find((item) => item.month === new Date().getMonth() + 1)

  const currentMonthValues = {
    budget: currentMonth?.budget ?? 0,
    expenses: currentMonth?.expenses ?? 0,
    incomes: currentMonth?.incomes ?? 0,
  }

  const lastMonth = summaryResponse.find((item) => item.month === new Date().getMonth())

  const lastMonthValues = {
    budget: lastMonth?.budget ?? 0,
    expenses: lastMonth?.expenses ?? 0,
    incomes: lastMonth?.incomes ?? 0,
  }

  const budgetRelativePercentage = getRelativePercentage(
    currentMonthValues.budget,
    lastMonthValues.budget,
  )

  const expensesRelativePercentage = getRelativePercentage(
    currentMonthValues.expenses,
    lastMonthValues.expenses,
  )

  const incomesRelativePercentage = getRelativePercentage(
    currentMonthValues.incomes,
    lastMonthValues.incomes,
  )

  return {
    budget: {
      title: 'Monthly budget',
      value: currentMonthValues.budget,
      relativePercentage: budgetRelativePercentage,
      relativePercentageLabel: 'of budget remaining',
    },
    expenses: {
      title: 'Monthly expense',
      value: currentMonthValues.expenses,
      relativePercentage: expensesRelativePercentage,
      relativePercentageLabel: 'vs last month',
    },
    incomes: {
      title: 'Monthly income',
      value: currentMonthValues.incomes,
      relativePercentage: incomesRelativePercentage,
      relativePercentageLabel: 'vs last month',
    },
  }
}
