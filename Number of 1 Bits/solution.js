/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let result = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      result++;
    }

    n = Math.floor(n / 2);
  }

  return result;
};
