export const getRelativePercentage = (
  currentValue: number,
  referenceValue: number,
): number | null => {
  if (referenceValue === 0) return null

  return ((currentValue - referenceValue) / referenceValue) * 100
}
