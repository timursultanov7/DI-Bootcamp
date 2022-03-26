const playTheGame = function () {
  let userNumber = confirm("Wanna play the game baby?");
  if (!userNumber) {
    alert("No problem, goodbye baby!");
    return;
  } else {
    alert("Let's play baby!");
    promptFunct();
  }
};

const promptFunct = function () {
  let counter = 0;
  let userNumber = +prompt("Enter the number between 0 and 10");
  counter++;
  console.log("counter", counter);
  if (isNaN(userNumber) || !(userNumber < 10 && userNumber > 0)) {
    alert("sorry goodbye");
    return;
  } else if (counter >= 3) {
    alert("Out of chances");
    return;
  } else {
    test(userNumber, computerNumber);
  }
};

let computerNumber = Math.floor(Math.random() * 10);

const test = function (userNumber, computerNumber) {
  console.log(userNumber, computerNumber);
  if (userNumber === computerNumber) {
    alert("Winner");
    return;
  } else if (userNumber < computerNumber) {
    alert("Your number is smaller then the computer’s, guess again");
    promptFunct();
  } else if (userNumber > computerNumber) {
    alert("Your number is grater then the computer’s, guess again");

    promptFunct();
  }
};
playTheGame();
