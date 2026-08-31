function factorialNumber(n) {
  let result = 1;

  for (let i = n; i >= 1; i--) {
    result = result * i;
  }

  return result;
}

console.log(factorialNumber(5));

// with recursion

function factorialNumberWithRecursion(n) {
  let result = 1;
  if (n > 1) {
    result = n * factorialNumberWithRecursion(n - 1);
  }
  return result;
}

console.log(factorialNumberWithRecursion(6));
