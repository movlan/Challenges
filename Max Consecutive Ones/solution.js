var findMaxConsecutiveOnes = function (nums) {
  if (nums.length < 2) return 0;
  let max = 0,
    curMax = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (nums[i] === nums[i + 1]) {
        curMax++;
      } else {
        max = curMax > max ? curMax : max;
        curMax = 1;
      }
    }
  }
  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
