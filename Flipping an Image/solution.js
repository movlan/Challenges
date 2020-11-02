var flipAndInvertImage = function (A) {
  A.forEach((arr) => {
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] === 1 ? 0 : 1;
    }
  });
  return A;
};
