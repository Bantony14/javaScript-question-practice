// Left Rotate Array by k Positions - Using Repeated Adjacent Swaps

let arr = [1, 2, 3, 4, 5];
let k = 2;

for (let i = 0; i < k; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
  }
}

console.log("arr", arr);

// Right Rotate Array by k Positions - Using Repeated Adjacent Swaps
let arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < k; i++) {
  for (let j = arr2.length - 1; j > 0; j--) {
    let temp = arr2[j];
    arr2[j] = arr2[j - 1];
    arr2[j - 1] = temp;
  }
}

console.log("arr2", arr2);
