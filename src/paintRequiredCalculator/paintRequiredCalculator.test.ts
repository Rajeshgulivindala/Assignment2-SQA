import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });
  test("returns 0 when area is 0", () => {
    const result = paintRequiredCalculator(0, 10);
    expect(result).toEqual(0); // 0 / 10 = 0
  });
  test("throws error when coverage per liter is 0", () => {
    expect(() => paintRequiredCalculator(50, 0)).toThrow("Coverage per liter must be greater than 0");
  });
  test("handles decimal inputs correctly", () => {
    const result = paintRequiredCalculator(50.5, 10.5);
    expect(result).toBeCloseTo(4.809); // 50.5 / 10.5 ≈ 4.809
  });
  test("handles very large numbers correctly", () => {
    const result = paintRequiredCalculator(1e6, 1e3);
    expect(result).toEqual(1000); // 1e6 / 1e3 = 1000
  });
});
function PaintRequiredForm(area: number, coveragePerLiter: number): string {
  const paintRequired = paintRequiredCalculator(area, coveragePerLiter);
  return `Paint required: ${paintRequired.toFixed(2)} liters`;
}

describe("PaintRequiredForm UI Integration", () => {
  test("displays correct paint required for valid inputs", () => {
    const result = PaintRequiredForm(50, 10);
    expect(result).toBe("Paint required: 5.00 liters");
  });

  test("displays 0 liters when area is 0", () => {
    const result = PaintRequiredForm(0, 10);
    expect(result).toBe("Paint required: 0.00 liters");
  });

});

