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


});
