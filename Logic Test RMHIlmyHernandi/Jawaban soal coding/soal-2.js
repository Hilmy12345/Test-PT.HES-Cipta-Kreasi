function productArray(value) {
  if (!Array.isArray(value) || value.length === 0) {
    return null;
  }

  const totalProduct = value.reduce((product, num) => product * num, 1);

  return value.map((num) => totalProduct / num);
}

console.log(productArray([12, 20]));
console.log(productArray([3, 27, 4, 2]));
console.log(productArray([13, 10, 5, 2, 9]));
console.log(productArray([16, 17, 4, 3, 5, 2]));
