// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // here is what I think
  // we need to initialize result variable more thean 0 result = 1
  // iterate trough array and compare each value to result
  // if current number in iteration is equal to result then we increase result
  // caviat here is given arr is not sorted
  // we can first sort arr and then iterate but that will increase big O

  let result = 1;
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (result === A[i]) {
      result++;
    }
  }

  return result;
}
console.log(solution([1, 3, 6, 4, 1, 2]));
