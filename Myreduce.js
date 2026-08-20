Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator;
  let startIndex;

  if (initialValue === undefined) {
    accumulator = this[0];
    startIndex = 1;
  } else {
    accumulator = initialValue;
    startIndex = 0;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
};

let arr = [1, 2, 3, 4];

let TotalSumOFArray = arr.myReduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 10);

console.log(TotalSumOFArray);
