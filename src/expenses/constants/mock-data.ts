import { type GetSummarySuccessResponse } from '@/movements/services/get-summary'
import { type ChartConfig } from '@/shared/components/chart'
import { getRelativePercentage } from '@/shared/functions/get-relative-percentage'

export const getSummaryCardsData = (summaryResponse: GetSummarySuccessResponse) => {
  const currentMonth = summaryResponse.find(
    (item) => item.month === new Date().getMonth() && item.year === new Date().getFullYear(),
  )

  const currentMonthValues = {
    budget: currentMonth?.budget ?? 0,
    expenses: currentMonth?.expenses ?? 0,
    incomes: currentMonth?.incomes ?? 0,
  }

  const lastMonth = summaryResponse.find(
    (item) => item.month === new Date().getMonth() - 1 && item.year === new Date().getFullYear(),
  )

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

export type ExpenseCategory =
  | 'Food'
  | 'Transportation'
  | 'Housing'
  | 'Entertainment'
  | 'Utilities'
  | 'Shopping'
  | 'Healthcare'

export const CATEGORIES: ExpenseCategory[] = [
  'Food',
  'Transportation',
  'Housing',
  'Entertainment',
  'Utilities',
  'Shopping',
  'Healthcare',
]

const generateMonthData = (year: number, month: number, baseAmount: number) => {
  const daysInMonth = new Date(year, month, 0).getDate()

  return Array.from({ length: daysInMonth }, (_, i) => {
    // Simulate weekly patterns (weekends have higher expenses)
    const dayOfWeek = new Date(year, month - 1, i + 1).getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    const dailyVariation = isWeekend ? 1.5 : 1

    // Add some randomness to the base amount
    const randomVariation = 0.7 + Math.random() * 0.6 // Random between 0.7 and 1.3

    // Assign categories based on a more controlled distribution
    const categoryIndex = Math.floor(Math.random() * CATEGORIES.length)
    const category = CATEGORIES[categoryIndex]

    // Adjust amounts based on category
    const categoryMultiplier = {
      Food: 1,
      Transportation: 0.8,
      Housing: 2.5,
      Entertainment: 0.6,
      Utilities: 1.2,
      Shopping: 0.9,
      Healthcare: 1.5,
    }[category]

    return {
      date: `${String(year)}-${String(month).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`,
      amount:
        Math.round(baseAmount * dailyVariation * randomVariation * categoryMultiplier * 100) / 100,
      category,
    }
  })
}

export const mockExpensesReport = [
  // January - Lower base amount due to post-holiday season
  ...generateMonthData(2024, 1, 1500),

  // February - Slight increase
  ...generateMonthData(2024, 2, 1800),

  // March - Spring activities begin
  ...generateMonthData(2024, 3, 2000),

  // April - Tax season impacts
  ...generateMonthData(2024, 4, 2200),

  // May - Moderate spending
  ...generateMonthData(2024, 5, 1900),

  // June - Summer activities begin
  ...generateMonthData(2024, 6, 2300),

  // July - Peak summer spending
  ...generateMonthData(2024, 7, 2500),

  // August - Back to school
  ...generateMonthData(2024, 8, 2400),

  // September - Fall season
  ...generateMonthData(2024, 9, 2000),

  // October - Pre-holiday season
  ...generateMonthData(2024, 10, 2100),

  // November - Holiday shopping begins
  ...generateMonthData(2024, 11, 2600),

  // December - Peak holiday season
  ...generateMonthData(2024, 12, 3000),
].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

export const barChartConfig = {
  amount: {
    label: 'Amount',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export const barChartData = mockExpensesReport
  .map((item) => ({
    month: Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(item.date)),
    amount: item.amount,
    monthIndex: new Date(item.date).getMonth(),
  }))
  .reduce<{ month: string; amount: number; monthIndex: number }[]>((prev, curr) => {
    const found = prev.find((item) => item.month === curr.month)

    if (found) {
      found.amount += curr.amount
    } else {
      prev.push(curr)
    }

    return prev
  }, [])
  .sort((a, b) => a.monthIndex - b.monthIndex)
  .map(({ month, amount }) => ({ month, amount }))

// Helper function to generate colors based on index
export const generateColor = (index: number) => {
  // Generate evenly spaced hues around the color wheel
  const hue = (index * 137.508) % 360 // Use golden angle approximation for better distribution

  return `hsl(${String(hue)} 70% 50%)`
}

export const pieChartConfig = {
  transactions: {
    label: 'Transactions',
    // Generate colors dynamically based on available categories
    colors: Object.fromEntries(
      CATEGORIES.map((category, index) => [category, generateColor(index)]),
    ) as Record<ExpenseCategory, string>,
  },
} satisfies ChartConfig

export const pieChartData = mockExpensesReport.reduce<Record<string, number>>((prev, curr) => {
  // Count number of transactions instead of summing amounts
  prev[curr.category] = (prev[curr.category] || 0) + 1

  return prev
}, {})

export const mockAccounts = [
  {
    id: 1,
    name: 'HSBC',
  },
  {
    id: 2,
    name: 'Supervielle',
  },
  {
    id: 3,
    name: 'Santander',
  },
]
