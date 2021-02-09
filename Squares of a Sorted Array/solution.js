/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  nums = nums.map((num) => num * num);
  nums.sort((a, b) => {
    return a - b;
  });
  return nums;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
