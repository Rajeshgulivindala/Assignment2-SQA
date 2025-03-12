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
  
});
