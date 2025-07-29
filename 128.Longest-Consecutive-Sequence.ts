function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  let arr: number[][] = [];
  let sortedNums = nums.sort((a, b) => a - b);
  sortedNums = sortedNums.filter((val, i, array) => val !== array[i - 1]);

  if (sortedNums.length === 1) return 1;

  for (let i = 1; i < sortedNums.length; i++) {
    if (arr.length === 0) {
      arr.push([]);
      arr[0].push(sortedNums[0]);
    }
    if (sortedNums[i] - sortedNums[i - 1] === 1) {
      arr[arr.length - 1].push(sortedNums[i]);
    } else {
      arr.push([]);
      arr[arr.length - 1].push(sortedNums[i]);
    }
  }

  return Math.max(...arr.map((i) => i.length));
}

console.log(longestConsecutive([0, 0]));
