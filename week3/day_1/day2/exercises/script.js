//Exercise 1:

const h1 = document.querySelector("#h_1");
const h2 = document.querySelector("#h_2");
const h3 = document.querySelector("#h_3");
const article = document.querySelector("article");
const usersAnswers = document.querySelector(".usersAnswer");
// console.log(usersAnswers);

console.log(h1.textContent);

const lastP = article.lastElementChild;

lastP.remove();

const changeBackgroundColor = function (e) {
  e.target.style.backgroundColor = "red";
};

const deleteH3func = function (e) {
  e.target.style.display = "none";
};

const createButton = function () {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = "Button";
  button.addEventListener("click", function (e) {
    console.log(e);
    article.style.fontWeight = "bold";
  });
  article.appendChild(button);
};

h2.addEventListener("click", changeBackgroundColor);
h3.addEventListener("click", deleteH3func);

createButton();

//Exercise 2

const form1 = document.querySelector("#form_1");

const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");

// console.log(form1);

// console.log(firstName);
// console.log(lastName);

const retrieveInputs = function (e) {
  e.preventDefault();
  if (firstName.value !== 0 || lastName.value !== 0) {
    console.log(firstName.value);
    console.log(lastName.value);
  }

  let newLi = document.createElement("li");

  newLi.textContent = firstName.value + " " + lastName.value;

  usersAnswers.appendChild(newLi);

  firstName.value = " ";
  lastName.value = " ";
};

form1.addEventListener("submit", retrieveInputs);

//Exercise 3

const paragraphHover = document.getElementById("pargraph_hover");

let allBoldItems = [];

function getBold_Items() {
  let strongItems = document.querySelectorAll("strong");
  for (let i = 0; i < strongItems.length; i++) {
    allBoldItems.push(strongItems[i]);
  }
}

getBold_Items();

console.log(allBoldItems);

function highlight() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "blue";
  }
}

// highlight();

function return_normal() {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "black";
  }
}

// return_normal();

paragraphHover.addEventListener("mouseover", highlight);
paragraphHover.addEventListener("mouseout", return_normal);

//exercise 4

let radius = document.getElementById("radius");
let volume = document.getElementById("volume");
let form2 = document.getElementById("MyForm");

const calculateSphereVolume = function (e) {
  e.preventDefault();
  volume.value = (4 / 3) * Math.PI * Math.pow(radius.value, 3);
  // console.log(volume.value);
};
let title = document.getElementById("h_1");

form2.addEventListener("submit", calculateSphereVolume);

// let events = [
//   "abort",
//   "afterprint",
//   "animationend",
//   "animationiteration",

//   "mouseover",
// ];

// events.forEach((event) => title.addEventListener(event, enlargTitle));

// title.addEventListener("click", enlargTitle);

function enlargTitle() {
  title.style.fontSize = "10rem";
}
