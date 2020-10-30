function pageCount(n, p) {
  // we need to see if page we looking is in fist or last half of the book
  if ((n/2) > p) {
    // if we in first half
    console.log("first half")
    // we need to count from front
    // we need to flip half as page number we need
    // since each page flip is two pages
    console.log(Math.floor(p/2))
  } else {
    // if we are on second half 
    console.log("second half")
    // we need to count from the back
    // we also need to take care of odd or even total page numbers by subtracting n%2
    console.log(Math.floor(n - p - (n%2)))
  }
}

pageCount(8, 7)