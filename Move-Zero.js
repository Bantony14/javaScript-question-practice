// Store all non-zero elements first, then append all zeros at the end.
const arr = [-2, 1, 0, 2, 0, 0, 0, 3];
const zeroInEnd = [];
const storeZero = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    zeroInEnd.push(arr[i]);
  } else {
    storeZero.push(arr[i]);
  }
}
zeroInEnd.push(...storeZero);

console.log("zeroInEnd", zeroInEnd);

// Track the next position for a non-zero element and swap it into place.

let getZeroPosition = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    [arr[getZeroPosition], arr[i]] = [arr[i], arr[getZeroPosition]];
    getZeroPosition++;
  }
}

console.log("arr", arr);
