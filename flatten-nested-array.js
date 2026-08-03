//  flat simple array with loop, flat and flatMap

// using with loop
const arr = [1, [2, 3], [4, 5], 6];
const flatArr = [];

for (let i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    flatArr.push(...arr[i]);
  } else {
    flatArr.push(arr[i]);
  }
}

console.log("flatArr:", flatArr);

//  using with flat method

const flatArrWithFlat = arr.flat();
console.log("flatArrWithFlat:", flatArrWithFlat);
// using with flatMap

const flatArrWithFlatMap = arr.flatMap((value) => value);
console.log("flatArrWithFlatMap:", flatArrWithFlatMap);
