Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

let arr = [1, 2, 3];

let sumOfArray = arr.myMap((value, index) => value * index);

console.log(sumOfArray);
