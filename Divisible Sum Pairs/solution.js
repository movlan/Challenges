function divisibleSumPairs(n, k, arr) {
  let counter = 0;
  for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
          if ((arr[i] + arr[j]) % k === 0) {
              counter++
          }
      }
  }
  return counter
}