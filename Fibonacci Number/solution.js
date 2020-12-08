/**
 * @param {number} N
 * @return {number}
 */
const fib = (N, mem = {}) => {
  if (N in mem) {
    return mem[N];
  }

  if (N === 0) {
    return 0;
  }
  if (N === 1 || N === 2) {
    return 1;
  }

  return fib(N - 2, mem) + fib(N - 1, mem);
};

console.log(fib(0));
console.log(fib(2));
console.log(fib(3));
console.log(fib(30));
