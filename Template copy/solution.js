// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // first change binary string to number
  let number = parseInt(S, 2);

  let sTrimmedArr = S.replace(/^0+/, "").split("");

  // declare count variable
  let count = 0;

  while (sTrimmedArr.length > 0) {
    let lastItem = sTrimmedArr.pop();
    if (lastItem == "0") {
      count++;
    } else {
      count += 2;
    }
  }

  return count - 1;
}

console.log(solution("011100"));
console.log(solution("1111010101111"));
