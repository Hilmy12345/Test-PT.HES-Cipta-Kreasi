function reverseWords(value) {
  return value
    .split(" ")
    .map((word) => {
      let reversed = word.split("").reverse().join("");
      return reversed[0].toUpperCase() + reversed.slice(1).toLowerCase();
    })
    .join(" ");
}

console.log(reverseWords("I am A Great human"));
