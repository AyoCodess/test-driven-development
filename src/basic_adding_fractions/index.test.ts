import { basicAddFractions } from ".";

describe("adding fractions", () => {
  test("zero + zero", () => {
    const result = basicAddFractions(0, 0);
    expect(result).toBe("0");
  });

  test("non-zero + zero", () => {
    const result = basicAddFractions(3, 0);

    expect(result).toBe("3");
  });
  test("zero + non-zero", () => {
    const result = basicAddFractions(0, 3);

    expect(result).toBe("3");
  });
  test("non-zero + non-zero", () => {
    const result = basicAddFractions(1, 4, 1, 2);

    expect(result).toBe("3/4");
  });
});
