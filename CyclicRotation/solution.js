// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // EDGE CASES
  if (A.length === 0) return A;
  if (!Array.isArray(A)) return undefined;

  for (let i = 0; i < K; i++) {
    const lastItem = A.pop();
    A.unshift(lastItem);
  }

  return A;
}

console.log(solution([], 4));
console.log(solution([3, 8, 9, 7, 6], 3));
