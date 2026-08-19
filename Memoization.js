function memoization() {
  let storeValue = {};
  return function (a) {
    if (storeValue[a]) return storeValue[a];
    let total = 10 + a;
    storeValue[a] = total;
    return total;
  };
}

const calculation = memoization();
console.log(calculation(5));
console.log(calculation(5));
console.log(calculation(20));
