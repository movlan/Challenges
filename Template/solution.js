function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetRot13 = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  let result = "";
  for (let i = 0; i < message.length; i++) {
    if (alphabet.indexOf(message[i]) != -1) {
      result += alphabetRot13[alphabet.indexOf(message[i])];
    } else {
      result += message[i];
    }
  }
  return result;
}
