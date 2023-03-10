/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order */

// constraints
/* 2 <= nums.length <= 10^4
minus 10^9 <= nums[i] <= 10^9
minus 10^9 <= target <= 10^9 */

import { twoSum } from ".";

describe("two sum", () => {
  test("throws error if empty array is passed", () => {
    expect(() => twoSum([], 10)).toThrowError(
      "Array length must be greater than 0"
    );
  });

  test("get indices of elements that add up to target", () => {
    const result = twoSum([5, 5], 10);
    expect(result).toEqual([0, 1]);
  });

  test("get indices of elements that add up to target", () => {
    const result = twoSum([5, 3, 7, 8, 3, 1, 8, 9, 7, 3, 4, 5, 7, 5], 11);
    expect(result).toEqual([1, 3]);
  });
});
