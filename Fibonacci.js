function fibonacci(n) {
  let a = 0;
  let b = 1;
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(a);

    let next = a + b;
    a = b;
    b = next;
  }

  return result;
}

console.log(fibonacci(10));

function fibonacciRecur(n, a = 0, b = 1) {
  if (n === 0) {
    return [];
  }

  let result = [a];
  result.push(...fibonacciRecur(n - 1, b, a + b));

  return result;
}

console.log(fibonacciRecur(11));
