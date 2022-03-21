//Exercise 1

let x = 5;
let y = 2;

if (x > y) {
  console.log("X bigger then Y");
} else if (x < y) {
  console.log("Y bigger then X");
}
//Exercise 2
//1.

let newDog = "Chihuahua";

//2.
console.log(newDog.length);

//3.

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

//4.

if (newDog === "Chihuahua") {
  console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
  console.log("I dont care, I prefer cats");
}

//Exercise 3

let userNumber = prompt("Please enter a numner");

if (userNumber % 2 === 0) {
  console.log("X is an even number");
} else {
  console.log("X is an odd number");
}

//Exercise 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0) {
  console.log("No one is online");
} else if (users.length === 1) {
  console.log(`${users[0]} is online`);
} else if (users.length === 2) {
  console.log(`${users[0]} and ${users[1]} are online`);
} else {
  console.log(`${users[0]}, ${users[1]} and the ${users.length - 2} others`);
}
