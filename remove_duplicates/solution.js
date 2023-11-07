/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 1;
  let lastSeen = null
  const length = nums.length

  for (let i = 2; i < length; i++) {
    if (nums[i - 1] === nums[i] && lastSeen !== nums[i]) {
      nums[j - 1]
      j++;
    }
  }
  return j;
};

const arr = [1, 1, 1, 2, 2, 3];

removeDuplicates(arr);

console.log(arr);
