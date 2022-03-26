//Exercise_1
//part 1
const infoAboutMe = function () {
  console.log("My name is Timur, I am 29, I Like pizza ");
};

infoAboutMe();

//part 2

const infoAboutPerson = function (personName, personAge, personFavoriteColor) {
  console.log(
    `Your name is ${personName}, your age is ${personAge}, your favorite color is ${personFavoriteColor}`
  );
};

infoAboutPerson("Timur", 29, "Brown");
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

//Exercise 2

const calculateTip = function () {
  let bill = Number(
    prompt("John!, enter the amount of the bill please right now!")
  );
  let tip = 0;
  if (bill < 50) {
    tip = bill * 0.2;
  }

  if (bill >= 50 && bill <= 200) {
    tip = bill * 0.2;
  }

  if (bill > 200) {
    tip = bill * 0.2;
  }
  console.log(` The amount of tip will be: ${tip}`);
  console.log(` The whole amount will be ${bill + tip}`);
};

// calculateTip();

//Exercise 3

const isDivisible = function (divisor) {
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }

  console.log(sum);
};

isDivisible(23);
isDivisible(3);
isDivisible(45);

//Exercise 4

let stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

let prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

let shoppingList = ["banana", "orange", "apple"];

const myBill = function () {
  let totalPrice = 0;
  for (let item of shoppingList) {
    if (stock[item] > 0) {
      totalPrice += prices[item];
      stock[item] -= 1;
    }
  }
  console.log(`The total price is ${totalPrice}`);
  return totalPrice;
};

let totalPrice = myBill();
console.log(stock);

//Exercise 5

const changeEnough = function (itemPrice, amountOfChange) {
  let wallet = 0;

  for (let a of amountOfChange) {
    console.log(amountOfChange[a]);
    // console.log(sum);
    // console.log(a);
  }
};

changeEnough(14.11, [2, 100, 0, 0]);
// changeEnough(0.75, [0, 0, 20, 5]);

//Exercise 6

//1

const hotelCost = function () {
  let nights = Number(prompt("Enter the number of nights you want to stay"));
  if (!isNaN(nights) && nights < 0) {
    console.log(`The total price is ${nights * 140}$`);
    return nights * 140;
  } else {
    Number(prompt("Enter the number of nights you want to stay"));
  }
};

let hotelCost1 = hotelCost();

//2
const planeRideCost = function () {
  let answer = prompt("What is your destination?").toLowerCase();

  let pattern = /^[0-9]*$/;

  if (pattern.test(answer)) {
    prompt("What is your destination?").toLowerCase();
  } else if (answer === "london") {
    console.log("London: 183$");
    return "London: 183$";
  } else if (answer === "paris") {
    console.log("Paris” : 220$");
    return "Paris” : 220$";
  } else {
    console.log("All other destination : 300$");
    return "All other destination : 300$";
  }
};

let planeRideCost1 = planeRideCost();

//3.

const rentalCarCost = function () {
  let totalPrice = 0;
  let rentalDays = +prompt("For how many days you want a car?");
  if (!isNaN(rentalDays) && rentalDays < 0 && rentalDays < 10) {
    totalPrice = rentalDays * 40;
    console.log(`The total sum for rental is ${totalPrice}$`);
    return totalPrice;
  } else if (rentalDays >= 10) {
    totalPrice = rentalDays * 40 - rentalDays * 0.05 * 40;

    console.log(`The total price for the rent is ${totalPrice}$`);
    return totalPrice;
  } else {
    +prompt("Try Again! For how many days you want a car?");
  }
};

let rentalCarCost1 = rentalCarCost();

//4.

const totalVacationCost = function () {
  console.log(
    ` Hotel costs: ${hotelCost1}$, the plane costs: ${planeRideCost1}$, the car costs ${rentalCarCost1}$`
  );
};

totalVacationCost();
