// let sentance = ["Hello", "World", "in", "a", "frame"];

let sentance = prompt("write your sentence baby");

const biggerWord = function (arr) {
  let bigWord = " ";
  for (let i = 0; i < arr.length; i++) {
    if (bigWord.length < arr[i].length) {
      bigWord = arr[i];
    }
  }
  // console.log(bigWord);

  return bigWord;
};

const starWord = function (arr) {
  let sentToArr = arr.split(" ");
  console.log(sentToArr);
  let bigWord = biggerWord(sentToArr);
  // console.log(bigWord);

  let starSign = "*";
  let space = " ";

  let frame = starSign.repeat(bigWord.length + 4);

  console.log(frame); // <-- frame

  for (let i = 0; i < sentToArr.length; i++) {
    let curWord = sentToArr[i];
    let space2 = space.repeat(bigWord.length - curWord.length);

    console.log(`* ${curWord}${space2} * `);
  }
  console.log(frame);
};

starWord(sentance);
