function Fizzbuzz(...arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      result.push("fizzbuzz");
    } else if (arr[i] % 3 === 0) {
      result.push("fizz");
    } else if (arr[i] % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(Fizzbuzz(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15));
