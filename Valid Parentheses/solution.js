/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let open = [];
  let sArr = s.split("");

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "(" || sArr[i] === "[" || sArr[i] === "{") {
      open.push(sArr[i]);
    } else if (sArr[i] === ")" && open[open.length - 1] === "(") {
      open.pop();
    } else if (sArr[i] === "]" && open[open.length - 1] === "[") {
      open.pop();
    } else if (sArr[i] === "}" && open[open.length - 1] === "{") {
      open.pop();
    } else {
      return false;
    }
  }

  return open.length === 0 ? true : false;
};

console.log(isValid("]"));
console.log(isValid("({})"));
console.log(isValid("({)}"));

console.log(isValid("(){}"));
