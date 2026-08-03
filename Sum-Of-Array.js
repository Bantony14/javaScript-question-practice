// Sum of array without reduce method

const arr = [10, 20, 30, 50, 40];

let sumOFArr = 0;

for (let i = 0; i < arr.length; i++) {
  sumOFArr = sumOFArr + arr[i];
}

console.log(sumOFArr);

//  Sum of array with reduce Method

const sumOFArrWithReduce = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sumOFArrWithReduce);
