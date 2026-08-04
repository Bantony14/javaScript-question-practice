// merge two array without duplicated the value
//  this below method using for loop

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 2, 3, 8, 9];

const result = [...arr1];

for (let i = 0; i < arr2.length; i++) {
  if (!result.includes(arr2[i])) {
    result.push(arr2[i]);
  }
}

console.log("LoopMethod:", result);

//  this method using set

const mergeArr = [...new Set([...arr1, ...arr2])];

console.log("mergeArr>>", mergeArr);
