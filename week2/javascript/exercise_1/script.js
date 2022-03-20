//Exercise_1

const favoriteFood = "banana";
const favoriteMeal = "breakfast";

console.log(`I eat ${favoriteFood} at every ${favoriteMeal} `);

//Exercise_2

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
console.log(myWatchedSeries);

let myWatchedSeriesLength = myWatchedSeries.length;

// myWatchedSeries = ["Lost", "Breaking Bad", "Soprano"];

console.log(
  `I watched 3 series: ${myWatchedSeries[0]},  ${myWatchedSeries[1]},  ${myWatchedSeries[2]} `
);

//Part II

myWatchedSeries.splice(2, 1, "friends", "witcher");

console.log(myWatchedSeries);

myWatchedSeries.push("Wanted");

console.log(myWatchedSeries);

myWatchedSeries.splice(0, 1);

console.log(myWatchedSeries);

console.log(myWatchedSeries[0].slice(1, 4));

//Exercise 3

let celciusTemp = 35;

let fahrenheitTemp = (celciusTemp / 5) * 9 + 32;

console.log(`${celciusTemp}°C is ${fahrenheitTemp}°F.`);

//Exercise 4

let c;
let a = 34;
let b = 21;
//1.
console.log(a + b); //first expression
// Prediction: 55
// Actual: 55

a = 2;
//2.
console.log(a + b); //second expression
// Prediction:23
// Actual:23

//3.
//Value c is just a declared variable

//4.
console.log(3 + 4 + "5");
//75

//Exercise 5
console.log(typeof 15);
// Prediction: number
// Actual: number
console.log(typeof 5.5);
// Prediction: float
// Actual: number

console.log(typeof NaN);
// Prediction: NaN
// Actual:Number

console.log(typeof "hello");
// Prediction: string
// Actual: string

console.log(typeof true);
// Prediction: boolean
// Actual: boolean;

console.log(typeof (1 != 2));
// Prediction:boolean
// Actual:boolean

console.log("hamburger" + "s");
// Prediction: string
// Actual: string

console.log("hamburgers" - "s");
// Prediction: NaN
// Actual:NaN

console.log("1" + "3");
// Prediction: 13
// Actual:13

console.log("1" - "3");
// Prediction: NaN
// Actual: -2

console.log("johnny" + 5);
// Prediction: johny5
// Actual: johny5

console.log("johnny" - 5);
// Prediction: NaN
// Actual:NaN

console.log(99 * "hello");
// Prediction: NaN
// Actual: NaN

console.log(1 != 1);
// Prediction: false
// Actual: false

console.log(1 == "1");
// Prediction: true
// Actual: true

console.log(1 === "1");
// Prediction: false
// Actual: false

//Exercise_6

console.log(5 + "34");
// Prediction: 39
// Actual: 534

console.log(5 - "4");
// Prediction: NaN
// Actual:1

console.log(10 % 5);
// Prediction: 0
// Actual:0

console.log("Java" + "Script");
// Prediction: JavaScript
// Actual:JavaScript

console.log(" " + " ");
// Prediction: " "
// Actual: " "

console.log(" " + 0);
// Prediction: '0'
// Actual: '0'

console.log(true + true);
// Prediction: true
// Actual: 2

console.log(true + false);
// Prediction: 1
// Actual: 1

console.log(false + true);
// Prediction: 1
// Actual:1

console.log(false - true);
// Prediction: -1
// Actual -1

console.log(!true);
// Prediction: false
// Actual: false

console.log(3 - 4);
// Prediction:-1
// Actual: -1

console.log("Bob" - "bill");
// Prediction: NaN
// Actual: NaN
