//exercise_1:

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//1.
fruits.splice(0, 1);
console.log(fruits);

//2.
fruits.sort();

console.log(fruits);

//3.

fruits.push("Kiwi");
console.log(fruits);

//4.
fruits.shift();
console.log(fruits);

//5.

fruits.reverse();
console.log(fruits);

//Exercise 2:

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

//1st way:

// const oranges = moreFruits[1][1];
// console.log(oranges);

//2nd way:

const oranges = moreFruits[1][1].find((el) => el === "Oranges");

console.log(oranges);
