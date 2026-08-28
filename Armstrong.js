function isArmStrong(value) {
  let result = 0;
  let str = String(value);

  for (let i = 0; i < str.length; i++) {
    result = result + Math.pow(Number(str[i]), str.length);
  }

  if (result === value) {
    console.log(`This ${value} is an Armstrong`);
  } else {
    console.log(`This ${value} is not an Armstrong`);
  }
}

isArmStrong(153);
