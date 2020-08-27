function collatz(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  }

  if (n % 2 === 0) {
    return 1 + collatz(n / 2);
  } else {
    return 1 + collatz(3 * n + 1);
  }
}

console.log(collatz(27));
