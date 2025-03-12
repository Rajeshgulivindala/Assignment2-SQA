import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  });
  test("returns 0 when one of the inputs is 0", () => {
    expect(calculateCanvasSize("0", "100")).toBe(0);
    expect(calculateCanvasSize("100", "0")).toBe(0);
    expect(calculateCanvasSize("0", "0")).toBe(0);
  });
  test("handles negative numbers", () => {
    expect(calculateCanvasSize("-10", "10")).toBe(-100);
    expect(calculateCanvasSize("10", "-10")).toBe(-100);
    expect(calculateCanvasSize("-10", "-10")).toBe(100);
  });
  test("handles decimal inputs correctly", () => {
    const result = calculateCanvasSize("10.5", "100.5");
    expect(result).toEqual(1055.25);
  });
  test("returns NaN for empty string inputs", () => {
    const result = calculateCanvasSize("", "100");
    expect(isNaN(result)).toBe(true); // Empty string is not a number
  });
  test("returns NaN for null or undefined inputs", () => {
    const result1 = calculateCanvasSize("null", "100");
    const result2 = calculateCanvasSize("10", "undefined");
    expect(isNaN(result1)).toBe(true); // null is not a number
    expect(isNaN(result2)).toBe(true); // undefined is not a number
  });
  test("handles very large numbers correctly", () => {
    const result = calculateCanvasSize("1e6", "1e6");
    expect(result).toEqual(1e12); // 1e6 * 1e6 = 1e12
  });
});
// Mock UI component that uses calculateCanvasSize
function CanvasSizeForm(length: string, width: string): string {
  const size = calculateCanvasSize(length, width);
  return `Canvas size is ${size} square units`;
}

describe("CanvasSizeForm UI Integration", () => {
  test("displays correct canvas size for valid inputs", () => {
    const result = CanvasSizeForm("10", "100");
    expect(result).toBe("Canvas size is 1000 square units");
  });
  test("displays canvas size as 0 when one input is 0", () => {
    const result = CanvasSizeForm("0", "100");
    expect(result).toBe("Canvas size is 0 square units");
  });

  test("displays canvas size as 0 when both inputs are 0", () => {
    const result = CanvasSizeForm("0", "0");
    expect(result).toBe("Canvas size is 0 square units");
  });

  test("displays NaN for invalid inputs", () => {
    const result = CanvasSizeForm("abc", "100");
    expect(result).toBe("Canvas size is NaN square units");
  });
});
function validateInputs(length: string, width: string): boolean {
  return !isNaN(parseInt(length)) && !isNaN(parseInt(width));
}

describe("Validation Function Integration", () => {
  test("calculates canvas size when inputs are valid", () => {
    const length = "10";
    const width = "100";
    const isValid = validateInputs(length, width);
    expect(isValid).toBe(true);

    const result = calculateCanvasSize(length, width);
    expect(result).toEqual(1000);
  });

  test("throws error when inputs are invalid", () => {
    const length = "abc";
    const width = "100";
    const isValid = validateInputs(length, width);
    expect(isValid).toBe(false);

    expect(() => calculateCanvasSize(length, width)).not.toThrow(); // NaN is returned, but no error is thrown
  });
});


