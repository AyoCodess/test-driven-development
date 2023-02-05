import { basicAddFractions } from ".";

describe("adding fractions", () => {
  test("1/4 + 1/2 = 3/4", () => {
    const result = basicAddFractions(1, 4, 1, 2);

    expect(result).toBe("3/4");
  });

  test("0 + 0 = 0", () => {
    const result = basicAddFractions(0, 0);
    expect(result).toBe("0");
  });
});
