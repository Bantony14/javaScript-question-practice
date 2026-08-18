function reverseString(str) {
  let revStr = str.split("");

  for (let i = 0; i < Math.floor(revStr.length / 2); i++) {
    let temp = revStr[i];
    revStr[i] = revStr[revStr.length - 1 - i];
    revStr[revStr.length - 1 - i] = temp;
  }
  return revStr.join("");
}

console.log(reverseString("bantony"));
