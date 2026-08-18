function CapitalEachWord(sentence) {
  let CapitalSentence = sentence.split(" ");
  for (let i = 0; i < CapitalSentence.length; i++) {
    let firstWord = CapitalSentence[i][0].toUpperCase();
    let RestAllWord = CapitalSentence[i].slice(1);
    CapitalSentence[i] = firstWord + RestAllWord;
  }

  return CapitalSentence.join(" ");
}

console.log(CapitalEachWord("hello world from bantony"));
