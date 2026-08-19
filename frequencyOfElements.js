function frequency(...arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
  }

  return obj;
}

console.log(frequency(1, 2, 2, 3, 1, 2));
