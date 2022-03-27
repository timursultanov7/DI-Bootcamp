//Exercise 1

const navBar = document.getElementById("navBar");

navBar.setAttribute("navBar", "socialNetworkNavigation");

const ulList = document.querySelector(".ul_list");
// console.log(ulList);

const newLi = document.createElement("li");
// console.log(logut);
// console.log(newLi);

const textNode = document.createTextNode("Logout");

ulList.appendChild(newLi).appendChild(textNode);

//Exercise 2

const pete = document.getElementById("pete");
pete.textContent = "Richard";

const timur = document.querySelectorAll(".timur");
const newLi2 = document.createElement("li");
const newLi3 = document.createElement("li");
for (let li of timur) {
  li.textContent = "Timur";
}

const list = document.getElementsByClassName("list");

const list_1 = document.querySelectorAll(".list_1");

const list_2 = document.querySelectorAll(".list_2");

const heyStudentsTextNode = document.createTextNode("Hey Students");
const heyStudentsTextNode2 = document.createTextNode("Hey Students");

for (let i = 0; i < list_1.length; i++) {
  // console.log(el);
  list_1[i].appendChild(newLi2).appendChild(heyStudentsTextNode);
}

for (let i = 0; i < list_2.length; i++) {
  // console.log(el);
  list_2[i].appendChild(newLi3).appendChild(heyStudentsTextNode2);
}

const sara = document.getElementById("sara");

sara.remove();

// console.log(list);

for (let i = 0; i < list.length; i++) {
  list[i].classList.add("student_list");
}

const container = document.getElementById("container");

// console.log(container);

container.firstElementChild.classList.add("university", "attendance");

// console.log(firstUl);

// .classList.add("university attendance");

//Exercise 3

const john = document.getElementById("john").textContent;
const pete1 = document.getElementById("pete_1").textContent;

const users = document.getElementById("users");

// console.log(users);

if ((users.style.background = "lightblue")) {
  alert(`Hello ${john} and  ${pete1}!`);
}

console.log(john);
console.log(pete1);

users.style.padding = "10px";

const list3 = document.querySelector(".list_3");

// console.log(list3);

list3.firstElementChild.style.display = "none";

list3.lastElementChild.style.border = "2px solid black";

document.body.style.fontFamily = "monospace";
