// Find common values from two arrays
// Using one loop with includes()

const arr1 = [3, 3, 5, 7, 9, 11, 13];
const arr2 = [1, 3, 6, 7, 10, 11, 15];
const result = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i])) {
    result.push(arr1[i]);
  }
}

console.log("result:", result);

// Find common values using nested loops (without includes())

const result2 = [];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      result2.push(arr1[i]);
      break;
    }
  }
}

console.log("result2:", result2);

// Find common values using nested loops
// Track duplicates with an object (without using includes() or Set)
const obj = {};
const result3 = [];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      obj[arr1[i]] = obj[arr1[i]] ? obj[arr1[i]] + 1 : 1;
      if (obj[arr1[i]] > 1) {
        break;
      }
      result3.push(arr1[i]);
      break;
    }
  }
}
console.log(obj);

console.log("result3:", result3);
