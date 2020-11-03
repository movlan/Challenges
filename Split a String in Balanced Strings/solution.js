/**
 * @param {string} s
 * @return {number}
 */
let balancedStringSplit = (s) => {
  // create result variable and set it to 0
  let result = 0;
  //create l & r counters and set it to 0
  let l = 0,
    r = 0;
  // loop trough string
  for (let i = 0; i < s.length; i++) {
    s[i] === "L" ? l++ : r++;
    // console.log(`l: ${l}, r: ${r}`);
    if (l === r) {
      result++;
    }
  }

  // return result
  return result;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
