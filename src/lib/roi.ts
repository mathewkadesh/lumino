export type BusinessType = 'takeaway' | 'cafe' | 'restaurant' | 'convenience' | 'barber' | 'other'
export type PlanTier = 'starter' | 'growth' | 'premium'

export interface ROIInputs {
  businessType: BusinessType
  dailyFootfall: number
  avgTransaction: number
  currentConversion: number
}

export interface ROIOutput {
  monthlyExtraRevenue: number
  annualExtraRevenue: number
  upliftPercent: number
  paybackMonths: number
  chartData: { month: number; without: number; with: number }[]
}

const UPLIFT_BY_TYPE: Record<BusinessType, number> = {
  takeaway: 0.18,
  cafe: 0.22,
  restaurant: 0.15,
  convenience: 0.12,
  barber: 0.20,
  other: 0.15,
}

const PLAN_COST: Record<PlanTier, number> = {
  starter: 39,
  growth: 69,
  premium: 119,
}

export function calculateROI(i: ROIInputs, plan: PlanTier = 'growth'): ROIOutput {
  const monthlyFootfall = i.dailyFootfall * 30
  const upliftFactor = UPLIFT_BY_TYPE[i.businessType]
  const newConversion = i.currentConversion * (1 + upliftFactor)
  const baselineRevenue = monthlyFootfall * i.currentConversion * i.avgTransaction
  const withLuminoRevenue = monthlyFootfall * newConversion * i.avgTransaction
  const monthlyExtra = withLuminoRevenue - baselineRevenue
  const planCost = PLAN_COST[plan]

  const chartData = Array.from({ length: 13 }, (_, m) => ({
    month: m,
    without: Math.round(baselineRevenue * m),
    with: Math.round(withLuminoRevenue * m),
  }))

  return {
    monthlyExtraRevenue: monthlyExtra,
    annualExtraRevenue: monthlyExtra * 12,
    upliftPercent: upliftFactor * 100,
    paybackMonths: planCost / monthlyExtra,
    chartData,
  }
}

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(n)
}
