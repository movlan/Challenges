var transpose = function (A) {
  // arr can be n x m where n width m height
  // after transpose we get array m x n
  // we should make result array where m arrays that each have n elements
  // n = A[0].length and m = A.length

  const n = A[0].length,
    m = A.length,
    result = Array.from(Array(n), () => new Array(m));

  A.forEach((arr, i) => {
    arr.forEach((num, j) => {
      result[j][i] = num;
    });
  });

  return result;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    // [7, 8, 9],
  ])
);
