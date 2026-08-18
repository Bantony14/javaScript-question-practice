function isPalindrome(value) {
  let isPldrm;
  if (value[0] !== value[value.length - 1]) {
    return false;
  }

  for (let i = 0; i < Math.floor(value.length / 2); i++) {
    if (value[i] === value[value.length - 1 - i]) {
      isPldrm = true;
    } else {
      isPldrm = false;
      return isPldrm;
    }
  }
  return isPldrm;
}

console.log(isPalindrome("madam"));
