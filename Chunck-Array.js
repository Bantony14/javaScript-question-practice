// Check for a valid chunk size, then divide the array into smaller arrays of size n.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const chunckArr = [];
const n = 0;

if (typeof n !== "number" || n <= 0) {
  console.log("Invalid chunk size");
  return;
}

for (let i = 0; i < arr.length; i += n) {
  chunckArr.push(arr.slice(i, i + n));
}

console.log("chunckArr:", chunckArr);
