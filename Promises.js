const p1 = new Promise((res, rej) => {
  res("done1");
});

const p2 = new Promise((res, rej) => {
  res("done1");
});

const p3 = new Promise((res, rej) => {
  res("done1");
});

const resultAll = Promise.all([p1, p2, p3]);
const resultAllByRace = Promise.race([p1, p2, p3]);

resultAll.then((AllsettelPromises) => console.log(AllsettelPromises));
resultAllByRace.then((AllsettelPromises) => console.log(AllsettelPromises));
