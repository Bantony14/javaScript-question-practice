// Finding Max and Min Value

let arr = [10, 20, 30, 40, 50, 10, 50, 90, 5];

let maxValue = arr[0];
let minValue = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (maxValue < arr[i]) {
    maxValue = arr[i];
  } else if (minValue > arr[i]) {
    minValue = arr[i];
  }
}

console.log("maxvalue:", maxValue);
console.log("minValue:", minValue);
