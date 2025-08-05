function isPalindrome(s: string) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }

  return true;
}
console.log(isPalindrome("Was it a car or a cat I saw?"));
