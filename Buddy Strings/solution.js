/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  for (let i = 0; i + 1 < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let toSwap = A.split("");
      // swap wto letters and see if it matches to other string
      let tmp = toSwap[i];
      toSwap[i] = toSwap[j];
      toSwap[j] = tmp;
      console.log(toSwap.join(""), B);
      if (toSwap.join("") === B) {
        return true;
      }
    }
  }

  return false;
};

console.log(buddyStrings("abab", "abab"));
