function counterWithClouser() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = counterWithClouser();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
