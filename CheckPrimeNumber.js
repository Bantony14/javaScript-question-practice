let arr = [1, 2, 3, 5, 7, 25, 49];

let primeNo = [];
let NonPrimeNo = [];

for (let i = 0; i < arr.length; i++) {
  let isPrime = true;

  if (arr[i] < 2) {
    isPrime = false;
  } else {
    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    primeNo.push(arr[i]);
  } else {
    NonPrimeNo.push(arr[i]);
  }
}

console.log(primeNo, "primeNo");
console.log(NonPrimeNo, "NonPrimeNo");
