function countLetters(str) {
  let CountVowels = 0;
  let CountConsonants = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      CountVowels++;
    } else if (str[i] === " ") {
      continue;
    } else {
      CountConsonants++;
    }
  }

  return { CountVowels, CountConsonants };
}

console.log(countLetters("Hello World"));
