function iqTest(numbers) {
  let odd = 0,
    even = 0,
    oddIdx,
    evenIdx;
  // make array of numbers and parse to integer
  let arrNumbers = numbers.split(" ").map((str) => parseInt(str));
  // iterate trough array, count how many even and odd
  // there will be either only one odd or even
  // so remember that index
  arrNumbers.forEach((num, idx) => {
    if (num % 2 === 0) {
      even++;
      evenIdx = idx;
    } else {
      odd++;
      oddIdx = idx;
    }
  });
  if (odd > even) {
    // if odds are more than even then we return evens index + 1
    return evenIdx + 1;
  } else {
    // other way
    return oddIdx + 1;
  }
}

console.log(iqTest("1 2 1 1"));
