function findMiddleAlphabet(first, last) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabet.indexOf(first.toUpperCase());
  const endIndex = alphabet.indexOf(last.toUpperCase());

  if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
    return "Invalid input";
  }

  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  const isEvenRange = (endIndex - startIndex + 1) % 2 === 0;

  if (isEvenRange) {
    return alphabet[middleIndex] + alphabet[middleIndex + 1];
  } else {
    return alphabet[middleIndex];
  }
}

console.log(findMiddleAlphabet("Q", "U"));
console.log(findMiddleAlphabet("R", "U"));
console.log(findMiddleAlphabet("T", "Z"));
console.log(findMiddleAlphabet("Q", "Z"));
