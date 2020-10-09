function birthday(s, d, m) {
  let result = 0;
  for (let i = 0; i <= s.length - m; i++) {
    const newArr = s.slice(i, i + m);
    const sum = newArr.reduce((acc, cur) => acc + cur);
    if (sum === d) {
      result++;
    }
  }
  return result;
}
