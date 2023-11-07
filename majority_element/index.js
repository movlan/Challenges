/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // const counts = {};
  // const arrLen = nums.length;
  // for (let i = 0; i < arrLen; i++) {
  //   if (counts[nums[i]]) {
  //     counts[nums[i]]++;
  //   } else {
  //     counts[nums[i]] = 1;
  //   }

  //   if (counts[nums[i]] > arrLen / 2) {
  //     return nums[i];
  //   }
  // }
  // return null;

  // if I knew the Boyer Moore Majority algorithm I wuld know how to solve it fast :(
  let candidate = 0;
  let count = 0;
  const arrLen = nums.length;
  for (let i = 0; i < arrLen; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};

const arr = [1, 2, 1];

const result = majorityElement(arr);

console.log(result);
