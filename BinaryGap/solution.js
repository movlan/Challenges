// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // get binary string arr so we can iterate it
  let nStrBinaryArray = N.toString(2).split("");

  // lets get variable to indicate that gap started, max and currMax
  let max = 0,
    currMax = 0,
    isGap = false;
  // iterate through arr

  for (let i = 0; i < nStrBinaryArray.length; i++) {
    // save current digit to variable
    let currDigit = nStrBinaryArray[i];

    // change is gap to true is it is first 1
    // and gap is not started
    if (!isGap && currDigit === "1") {
      isGap = true;
    }

    // if isGap true and digit is 0 start counting up currMax
    if (isGap && currDigit === "0") {
      currMax++;
    }

    // end of gap is when isGap true and we see another 1
    if (isGap && currDigit === "1") {
      // change is gap to false to indicate end of gap

      // update max if currMax is bigger than max
      if (currMax > max) {
        max = currMax;
      }
      currMax = 0;
    }
  }
  return max;
}

console.log(solution(1041));
// console.log(solution(529));
// console.log(solution(32));
