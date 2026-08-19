let arr = [
  { name: "A", city: "Ahmedabad" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Ahmedabad" },
];

function arrayofObjectIntoSingleObj(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].city] = obj[arr[i].city]
      ? [...obj[arr[i].city], arr[i]]
      : [arr[i]];
  }

  return obj;
}

console.log(arrayofObjectIntoSingleObj(arr));
