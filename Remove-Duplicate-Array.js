// Remove duplicate values without mutating the original array.
let arr = [1, 2, 2, 3, 4, 6, 7, 7, 7, 5];
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
  // Add only unique values.
  if (!arr2.includes(arr[i])) {
    arr2.push(arr[i]);
  }
}

console.log("Using includes():", arr2);

// Remove duplicates using filter().
// Keep only the first occurrence of each value.
const newArr = arr.filter((value, index) => arr.indexOf(value) === index);

console.log("Using filter() + indexOf():", newArr);

//  this method using set

const arrayWithoutDuplicateValue = [...new Set(arr)];

console.log("Using Set:", arrayWithoutDuplicateValue);

// this method doing same but with extrab logic

const seen = new Set();
const result = [];

for (let i = 0; i < arr.length; i++) {
  if (!seen.has(arr[i])) {
    seen.add(arr[i]);
    result.push(arr[i]);
  }
}
console.log("Using Set with extra logic:", result);
