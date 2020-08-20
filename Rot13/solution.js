function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetRot13 = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  let result = "";
  for (let i = 0; i < message.length; i++) {
    // check if character is in alphabet
    if (alphabet.indexOf(message[i]) != -1) {
      // it is in alphabet, change it
      result += alphabetRot13[alphabet.indexOf(message[i])];
    } else {
      // not in alphabet, keep same
      result += message[i];
    }
  }
  return result;
}
