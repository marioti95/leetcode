function twoSum(numbers: number[], target: number): number[] {
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    const curSum = numbers[left] + numbers[right];

    if (curSum > target) {
      right--;
    } else if (curSum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [];
}
console.log(twoSum([2, 3, 4], 6));
