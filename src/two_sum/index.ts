export function twoSum(array: number[], target: number) {
  let hashMap: any = {};
  if (array.length === 0)
    throw new Error("Array length must be greater than 0");

  for (let i = 0; i < array.length; i++) {
    let complement: number = array[i];

    if (hashMap[target - complement] !== undefined) {
      return [hashMap[target - complement], i];
    }

    hashMap[complement] = i;
  }

  return [];
}
