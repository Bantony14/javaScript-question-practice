Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

let arr = [1, 2, 3];

let FindMatch = arr.myFilter((value, index) => value === 2);

console.log(FindMatch);
