const collatz = (n) => {
  if (n === 1) {
    return 0;
  } else {
    if (n % 2 === 0) {
      return 1 + collatz(n / 2);
    } else {
      return 1 + collatz(3 * n + 1);
    }
  }
};

setTimeout(collatz(1), 1000);
