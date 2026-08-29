// const obj = {
//   name: "Bantony",
//   age: 24,
//   contry: "india",
//   city: "surat",
//   state: "gujarat",
// };

// const shallowCopy = { ...obj };

// // both object is have difference referench of object

// obj.name = "Antony";
// console.log(obj);
// console.log(shallowCopy);

// //  deep copy using structuredClone

// const obj2 = {
//   name: "Bantony",
//   age: 24,
//   address: {
//     contry: "india",
//     city: "surat",
//     state: "gujarat",
//   },
// };

// const deepCopy = structuredClone(obj2);

// obj2.address.city = "vapi";

// console.log(obj2);
// console.log(deepCopy);

//  deep copy using reccurion function
const obj3 = {
  name: "Bantony",
  age: 24,
  address: {
    contry: "india",
    city: {
      area: "surat",
    },
    state: "gujarat",
  },
};

function deepCopyObj(obj) {
  const keys = Object.keys(obj);
  let deepCopy = {};
  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === "object") {
      deepCopy[keys[i]] = deepCopyObj(obj[keys[i]]);
    } else {
      deepCopy[keys[i]] = obj[keys[i]];
    }
  }
  return deepCopy;
}
