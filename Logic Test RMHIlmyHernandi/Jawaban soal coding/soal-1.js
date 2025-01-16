function maxRedigit(num) {
  // Cek apakah argumen valid (bilangan bulat positif tiga digit)
  if (typeof num !== "number" || num < 100 || num > 999) {
    return null;
  }

  // Ubah angka menjadi array digit, urutkan secara menurun, lalu gabungkan kembali menjadi angka
  return parseInt(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join(""),
    10
  );
}

// Contoh penggunaan
console.log(maxRedigit(123)); // Output: 321
console.log(maxRedigit(231)); // Output: 321
console.log(maxRedigit(321)); // Output: 321
console.log(maxRedigit(-1)); // Output: null
console.log(maxRedigit(0)); // Output: null
console.log(maxRedigit(99)); // Output: null
console.log(maxRedigit(1000)); // Output: null
