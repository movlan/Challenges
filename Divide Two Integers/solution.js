/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let result = 0;
  let arrDividend =
    dividend < 0
      ? dividend.toString().split("").splice(1)
      : dividend.toString().split("");

  console.log(arrDividend);

  return result >= 2147483648
    ? 2147483647
    : result < -2147483648
    ? -2147483648
    : result;
};

console.log(divide(-2147483648, 1));
console.log(divide(2147483648, -3));
