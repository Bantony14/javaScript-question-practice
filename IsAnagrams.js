function isAnagrams(str1, str2) {
  let str1Obj = {};
  let str2Obj = {};
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) {
      return false;
    }
    str1Obj[str1[i]] = str1Obj[str1[i]] ? str1Obj[str1[i]] + 1 : 1;
    str2Obj[str2[i]] = str2Obj[str2[i]] ? str2Obj[str2[i]] + 1 : 1;
  }
  for (let value of Object.keys(str1Obj)) {
    if (str1Obj[value] !== str2Obj[value]) {
      return false;
    }
  }

  console.log(str1Obj, str2Obj);

  return true;
}

console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("hello", "world")); // false
console.log(isAnagrams("anagram", "nagaram")); // true
console.log(isAnagrams("aap", "app"));
