import { addFractions } from ".";

describe("adding fractions", () => {
  test("1/4 + 1/2 = 3/4", () => {
    const result = addFractions(1, 4, 1, 2);

    expect(result).toBe("3/4");
  });
});
