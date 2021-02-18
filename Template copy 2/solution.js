// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // create empty array
  const odds = [];
  for (let i = 0; i < A.length; i++) {
    const idx = odds.indexOf(A[i]);

    if (idx >= 0) {
      // we have diplicate remove it from odds
      odds.splice(idx, 1);
    } else {
      // we see this number first time add it to odds
      odds.push(A[i]);
    }
  }
  // when we get here odds must have only one element return it
  return odds[0];
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
