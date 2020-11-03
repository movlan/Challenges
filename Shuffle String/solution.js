/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
  let result = s.split("");

  s.split("").forEach((letter, idx) => {
    result[indices[idx]] = letter;
  });

  return result.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
