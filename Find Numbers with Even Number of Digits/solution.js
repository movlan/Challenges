/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let result = 0;
  nums.forEach((num) => {
    let count = 0;
    while (num > 0) {
      num = Math.floor(num / 10);
      count++;
    }
    if (count % 2 === 0) {
      result++;
    }
  });
  return result;
};

console.log(findNumbers([10000]));
