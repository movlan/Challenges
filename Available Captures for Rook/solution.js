/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  // set count variable
  let count = 0;
  // find "R"
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "R") {
        // console.log(`R is at ${i} ${j}`);
        // "R" is found check for "p"
        // west
        for (let w = i - 1; w >= 0; w--) {
          if (board[w][j] === "B") {
            break;
          } else if (board[w][j] === "p") {
            count++;
            break;
          }
        }

        //east
        for (let e = i + 1; e < 8; e++) {
          if (board[e][j] === "B") {
            break;
          } else if (board[e][j] === "p") {
            count++;
            break;
          }
        }

        //north
        for (let n = j - 1; n >= 0; n--) {
          if (board[i][n] === "B") {
            break;
          } else if (board[i][n] === "p") {
            count++;
            break;
          }
        }

        //south
        for (let s = j + 1; s < 8; s++) {
          if (board[i][s] === "B") {
            break;
          } else if (board[i][s] === "p") {
            count++;
            break;
          }
        }
      }
    }
  }

  //return count
  return count;
};

console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "B", "B", "B", "B", "B", "."],
    [".", "p", "B", "p", "p", "p", "B", "p"],
    [".", "p", "B", "p", "R", "p", "B", "p"],
    [".", "p", "B", "p", "p", "p", "B", "p"],
    [".", ".", "B", "B", "B", "B", "B", "."],
    [".", ".", ".", "p", "p", "p", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
