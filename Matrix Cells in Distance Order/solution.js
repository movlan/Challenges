/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */

const manhattanDist = (cords0, cords1) => {
  return Math.abs(cords0[0] - cords1[0]) + Math.abs(cords0[1] - cords1[1]);
};
const allCellsDistOrder = function (R, C, r0, c0) {
  let result = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      result.push([i, j]);
      console.log(manhattanDist([r0, c0], [i, j]));
    }
  }
  result.sort((a, b) => {
    return manhattanDist([r0, c0], a) - manhattanDist([r0, c0], b);
  });
  return result;
};

console.log(allCellsDistOrder(2, 3, 1, 2));
console.log([
  [1, 2],
  [0, 2],
  [1, 1],
  [0, 1],
  [1, 0],
  [0, 0],
]);

/*
 * *
 * *
 * 0
 */
