let arr = [50, 50, 30, 40];
let minValue = arr[0];
let maxValue = arr[0];
let secondLargestNumber = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (maxValue < arr[i]) {
    maxValue = arr[i];
  }
  if (minValue > arr[i]) {
    minValue = arr[i];
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < maxValue && arr[i] > minValue) {
    if (arr[i] > secondLargestNumber) secondLargestNumber = arr[i];
  }
}

if (secondLargestNumber === -Infinity) {
  console.log("Second largest does not exist");
} else {
  console.log(secondLargestNumber);
}
