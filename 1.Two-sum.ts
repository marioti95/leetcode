function twoSum(nums: number[], target: number): number[] {
  const newMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (newMap.has(diff)) return [newMap.get(diff), i];
    else {
      newMap.set(nums[i], i);
    }
  }
  return [];
}

console.log(twoSum([3, 4, 5, 6], 7));
