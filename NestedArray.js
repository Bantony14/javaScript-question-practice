const arr = [1, [2, 3], [4, [5, 6]], 7];

function flatNestedArrayRecursion(arr) {
  let result = [];
  if (arr.length === 0) return result;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flatNestedArrayRecursion(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flatNestedArrayRecursion(arr));
