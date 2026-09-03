function myPromiseAll(promise) {
  let result = [];
  let finalValue = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promise.length; i++) {
      result[i] = promise[i]();
    }

    for (let i = 0; i < result.length; i++) {
      result[i].then((value) => {
        finalValue[i] = value;
        count++;

        if (count === promise.length) {
          resolve(finalValue);
        }
      });
    }
  });
}

const task1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("A"), 1000));

const task2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("B"), 500));

const task3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("C"), 1500));

async function callApi() {
  const [A, B, C] = await myPromiseAll([task1, task2, task3]);
  console.log(A); // A
  console.log(B); // B
  console.log(C); // C
}

callApi();
