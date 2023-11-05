/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let last = nums.length;
  let i = 0;
  while (i < last) {
    if (nums[i] === val) {
      nums[i] = nums[last-1];
      nums.pop()
      last--;
    } else {
      i++;
    }
  }

  return last
};

const arr = [3, 2, 2, 3];
const arr2 = [3];

removeElement(arr, 3);
removeElement(arr2, 3);

console.log(arr);
console.log(arr2);
