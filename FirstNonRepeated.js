function firstNonRepeated(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
  }
  for (let value of Object.keys(obj)) {
    if (obj[value] === 1) {
      return value;
    }
  }
}

console.log(firstNonRepeated("bantony"));
