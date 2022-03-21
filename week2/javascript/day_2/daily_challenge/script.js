//DAILY CHALLENGE

//TEST DATA:
let sentence = "The movie is not that bad I like it";
// let sentence = "This movie is not so bad !";
// let sentence = "This dinner is bad";

let sentenceArr = sentence.split(" ");

console.log(sentenceArr);

let wordNot = sentenceArr.indexOf("not");
console.log(wordNot); //3

let wordBad = sentenceArr.indexOf("bad");
console.log(wordBad); //5

if (wordBad > wordNot) {
  sentenceArr.splice(wordNot, wordBad - wordNot + 1, "good");
  sentence = sentenceArr.join(" ");

  console.log(sentence);
} else {
  console.log(sentence);
}
