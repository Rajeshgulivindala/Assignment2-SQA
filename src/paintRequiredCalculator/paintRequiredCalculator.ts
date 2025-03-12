export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
  // Throw an error if coveragePerLiter is 0
  if (coveragePerLiter === 0) {
    throw new Error("Coverage per liter must be greater than 0");
  }

  // Calculate the paint required
  const paintRequired = area / coveragePerLiter;

  // Return the result
  return paintRequired;
}