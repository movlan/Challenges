function bouncingBall(h, bounce, window) {
  // edge cases
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
    return -1;
  }
  // ball will bounce to h*bounce height
  // we need to see if h*bounce is grater than window
  // then we need to store h*bounce as new h
  // we will start count with 1,
  // because we will see ball at least once
  let count = 1;
  while (h > window) {
    h = h * bounce;
    if (h > window) {
      count += 2;
    }
  }
  return count;
}

// console.log(bouncingBall(3.0, 0.66, 1.5)); // => 3

console.log(bouncingBall(30.0, 1, 1.5)); // => 15
