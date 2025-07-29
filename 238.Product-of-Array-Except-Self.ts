function productExceptSelf(nums: number[]) {
  let zeroNum = nums.length - nums.filter((i) => i !== 0).length;

  if (zeroNum >= 2) return Array(nums.length).fill(0);

  let arr: number[] = [];
  let acc = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      acc = nums[i];
    } else {
      if (nums[i] !== 0) {
        acc *= nums[i];
      }
    }
  }

  if (zeroNum === 1)
    return nums.map((i) => {
      if (i === 0) return acc;
      else return 0;
    });

  arr = nums.map((i) => {
    return acc / i;
  });

  return arr;
}

console.log(productExceptSelf([-1, 0, 1, 2, 3]));
