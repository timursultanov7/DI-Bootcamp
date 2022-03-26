const beerSong = function () {
  let userNum = +prompt("Enter the number of bottles!");

  let num = 0;

  for (let i = userNum; i > 0; i--) {
    console.log(i + " bottles of beer on the wall");
    console.log(i + " bottles of beer");

    i = i - num;
    num++;

    if (num === 1) {
      console.log(`Take ${num} down, pass it around`);
    } else {
      console.log(`Take ${num} them out, pass them around`);
    }
  }
};
beerSong();
