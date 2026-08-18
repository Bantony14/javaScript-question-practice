function hasUniqueCharacters(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
    if (obj[str[i]] > 1) {
      return false;
    }
  }

  return true;
}

console.log(hasUniqueCharacters("bantony"));
console.log(hasUniqueCharacters("abcde"));
