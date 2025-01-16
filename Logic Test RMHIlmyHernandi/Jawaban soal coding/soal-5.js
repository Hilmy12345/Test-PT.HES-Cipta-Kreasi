function nearestFibonacci(value) {
  const sum = value.reduce((a, b) => a + b, 0);

  let prev = 0;
  let curr = 1;

  while (curr < sum) {
    const temp = curr;
    curr += prev;
    prev = temp;
  }

  const diff = Math.min(Math.abs(sum - prev), Math.abs(curr - sum));
  return diff;
}

console.log(nearestFibonacci([15, 1, 3]));
console.log(nearestFibonacci([1, 2, 3]));
console.log(nearestFibonacci([10, 20, 15]));
