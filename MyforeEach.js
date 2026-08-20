Array.prototype.myforeEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

let arr = [1, 2, 3];

let changeArray = arr.myforeEach((value, index) => (arr[index] = 20));

console.log(arr);

console.log(changeArray);
