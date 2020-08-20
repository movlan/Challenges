// first wanted to iterate trough word and see if previous is lower case then next need to be lower or test fails
// then realize that we can use comparison .toUpperCase and .toLowerCase

// var detectCapitalUse = function (word) {
//   if (word === word.toUpperCase() || word === word.toLowerCase()) {
//     return true;
//   }
//   return false;
// };

// now we need to see if first letter is upper case then rest need to be either all upper or all lower

var detectCapitalUse = function (word) {
  if (word === word.toUpperCase() || word === word.toLowerCase()) {
    return true;
  } else if (
    word[0] === word[0].toUpperCase() &&
    (word.slice(1) === word.slice(1).toUpperCase() ||
      word.slice(1) === word.slice(1).toLowerCase())
  ) {
    return true;
  }
  return false;
};

console.log(detectCapitalUse("uSA"));
