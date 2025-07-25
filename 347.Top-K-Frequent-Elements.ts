function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();

  for (let i of nums) {
    if (!map.has(i)) map.set(i, [1, i]);
    else {
      let count = map.get(i)[0] + 1;
      map.set(i, [count, i]);
    }
  }
  const arr = Array.from(map.values())
    .sort((a, b) => b[0] - a[0])
    .slice(0, k);
  return arr.map((i) => i[1]);
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));
