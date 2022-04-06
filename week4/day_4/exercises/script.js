//Exercise _1

const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// Exerceise_2

const displayStudentInfo = function ({ first, last }) {
  this.first = first;
  this.last = last;
  console.log(this.first, this.last);
};

displayStudentInfo({ first: "Elie", last: "Schoppik" });

//Exercise 3

const users = { user1: 18273, user2: 92833, user3: 90315 };

let entriesArr = Object.entries(users);

let newArrUsers = [];

for (let [key, value] of entriesArr) {
  console.log([key, +value * 2]);
  newArrUsers.push([key, +value * 2]);
}

console.log(newArrUsers);

//Exercise 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
// console.log(member);

//Exercise 5
// 2nd option is correct

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

const labradow = new Labrador("Habibi", 120);

console.log(labradow);

//Exercise 6

// console.log([2] === [2], {} === {});

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

console.log(object1.number);

object1.number = 4;

console.log(object1.number);
console.log(object3.number);

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(animalSound) {
    this.animalSound = animalSound;
    return (this.animalSound = `Name: ${this.name}, type: ${this.type}, color: ${this.color}, Sound:  ${this.animalSound}`);
  }
}

const elephant = new Mamal("Casablanca", "big", "red");
const cow = new Mamal("Koshka", "ksks", "yellow");

elephant.sound("ehuu");
cow.sound("muuu");
console.log(elephant);
console.log(cow);
