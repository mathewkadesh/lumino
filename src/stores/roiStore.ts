import { create } from 'zustand'
import { calculateROI } from '@/lib/roi'
import type { ROIInputs, ROIOutput, PlanTier } from '@/lib/roi'

interface ROIStore {
  inputs: ROIInputs
  plan: PlanTier
  output: ROIOutput
  setInputs: (inputs: Partial<ROIInputs>) => void
  setPlan: (plan: PlanTier) => void
}

const defaultInputs: ROIInputs = {
  businessType: 'takeaway',
  dailyFootfall: 400,
  avgTransaction: 12,
  currentConversion: 0.04,
}

export const useROIStore = create<ROIStore>((set, get) => ({
  inputs: defaultInputs,
  plan: 'growth',
  output: calculateROI(defaultInputs, 'growth'),
  setInputs: (partial) => {
    const inputs = { ...get().inputs, ...partial } satisfies ROIInputs
    set({ inputs, output: calculateROI(inputs, get().plan) })
  },
  setPlan: (plan: PlanTier) => {
    set({ plan, output: calculateROI(get().inputs, plan) })
  },
}))
