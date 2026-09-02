function sumOfDigitRecurion(n) {
  if (n === 0) {
    return 0;
  }

  return (n % 10) + sumOfDigitRecurion(Math.floor(n / 10));
}

console.log(sumOfDigitRecurion(1234));
