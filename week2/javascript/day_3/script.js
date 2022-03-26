//Exercise 1

let people = ["Greg", "Mary", "Devon", "James"];

//1.
people.shift();

//2.

people.splice(2, 1, "Jason");

//3.
people.push("Timur");

//4.

console.log(people.indexOf("Mary"));

//5.

let slicedPeople = people.slice(1, 3);

console.log(slicedPeople);

//6.

console.log(people.indexOf("Foo"));

console.log(people);

//7.

let last = people[people.length - 1];

console.log(last);

//part II Loops:

//1.

for (let person of people) {
  console.log(person);
}

//2.
for (let person of people) {
  console.log(person);
  if (person === "Jason") {
    break;
  }
}

//Exercise 2

let colors = ["black", "brown", "green", "white", "red"];

for (const [key, color] of Object.entries(colors)) {
  if (+key === 0) {
    console.log(`My ${+key + 1}st choice is ${color}`);
  } else if (+key === 1) {
    console.log(`My ${+key + 1}nd choice is ${color}`);
  } else if (+key === 2) {
    console.log(`My ${+key + 1}rd choice is ${color}`);
  } else {
    console.log(`My ${+key + 1}th choice is ${color}`);
  }
}

//Exercise 3

// let input = +prompt("Enter a number");

// console.log(typeof input);

// while (input < 10) {
//   input = +prompt("Enter a number more then 10");
// }

//Exercise 4

let building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

console.log(building.nameOfTenants[1]);

console.log(building.numberOfRoomsAndRent.dan[0]);

//Exercise 5

const family = {
  lastName: "Smith",
  members: 5,
  city: "New York",
};

//Exercise 6

let details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

console.log(details);

for (let detail in details) {
  console.log(`${detail} ${details[detail]}`);
}

//Exercise 7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();

let societyName = "";

for (let word of names) {
  societyName += word.charAt(0);
}

console.log(societyName);

// const calculateAge = function (myAge) {
//   let mumAge = myAge * 2;
//   let dadAge = mumAge * 1.2;
//   console.log(
//     ` The age of my father is ${dadAge} and the age of my mother is ${mumAge}`
//   );
// };

// calculateAge(29);
