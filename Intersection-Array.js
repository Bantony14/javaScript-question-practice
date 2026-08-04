// Find common values from two arrays
// Using one loop with includes()

const arr1 = [3, 5, 7, 9, 11, 13];
const arr2 = [1, 3, 6, 7, 10, 11, 15];
const result = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i])) {
    result.push(arr1[i]);
  }
}

console.log("result:", result);

// Find common values using nested loops (without includes())
// This approach also prevents duplicate values in the result

const result2 = [];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      if (result2.includes(arr1[i])) {
        break;
      }
      result2.push(arr1[i]);
      break;
    }
  }
}

console.log("result2:", result2);
