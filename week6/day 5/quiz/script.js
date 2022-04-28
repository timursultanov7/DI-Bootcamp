/*

# Review on Javascript
// #### Basics
// 1. How to access the second element of the array `let arr = [3, 7, 10]`
// 2. For the code below, what does `arrNums.splice(2 , 0)` return?
    ```javascript
    let arrNums = [1, 2, 3, 4, 5];
    ```
    
    //1. arr[1]
    //2. 
    
// 3. What is the result of the following code :
    ```javascript
    const oneTwoThree = [1, 2, 3]
    const sevenEightNine = [7, 8, 9]
    
    const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
    console.log(all)
    ```
// 4. What does the following code print to the console?
   ```javascript
   let golf = {
     type: "sport",
     clubs: {
       high_end: "taylor made",
       low_end: "rusty basement clubs"
     }
   }  
   golf.clubs.high_end = "callaway";
   console.log(golf.clubs.high_end);
   ```
   
// 5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.
    ```javascript
    const x = function(a, b){
       return a*b;
    }
    ```
// 6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain
    ```javascript
    function x() {
        a = 5;
    }
    ```
// #### Functions
// 7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?
    ```javascript
    function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage() + name);
    }
    greeting(sayHello, "JavaScript!");
//     ```
// 8. Transform this function into an arrow function
//       ```javascript
      function sum(num1, num2){
          return num1 + num2
      }
      
      sum(40,2)
      sum(42,0)
      console.log("the answer to everything is", sum(42,0))
      ```
9. What does the following code print to the console? Explain the process and concept behind it
     ```javascript
     function foo () {
       function bar() {
         return "Poppin' bottles";
       }
       return bar();
     }
     console.log(foo());
     ```
#### DOM
10. Which of the following events will you add in the `addEventListener()`method? 
      ☐ click
      ☐ onclick
11. Does the `addEventListener()` method allow you to add many events to the same element?
    ```javascript
    x.addEventListener("mouseover", func1);
    x.addEventListener("click", func2);
    x.addEventListener("mouseout", func3);`
    ```
12. DOM exercise
      1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions
      2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red
#### Array Methods
14. What is the value of `passed` in the following code?
     ```javascript
     let marks = [67, 60, 89, 90, 67, 42];
     
     let passed = marks.every(function(m) {
        return m >= 50;
     });
     ```
15. What does the following code log?
   ```javascript
   let nums = [10, 50, 88];
   
   let bignums = nums.filter(function(n) {
      return n > 10;
   });
   
   console.log(bignums);
   ```
16. Use a javascript array method to square the value of every element in the array. 
   ```javascript
   const input = [ 1, 2, 3, 4, 5 ];
   //code
   console.log(input) // [ 1, 4, 9, 16, 25]
   ```
16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 
     ```javascript
     const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
     //code
     console.log(total) //42
     ```
17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.
     ```javascript
     const input = 'George Raymond Richard Martin';
     //code 
     console.log(initials)//'GRRM'
     ```
#### Object and Classes
18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example
19. What will be printed in the console
    ```javascript
    function Item(name, price) {
       this.name = name;
       this.price = price;
       this.displayInfo = function() {
       console.log(this.name + " is for $ " + this.price)
       }
    } 
    const cake = new Item("Chocolate Cake", 10);
    cake.displayInfo();
    ```
20. Refactor this code using Classes
#### Promises
21. What will be the output and why ? What will be the state of the promise ?
    ```javascript
    Promise.resolve('Success!')
      .then(data => {
        return data.toUpperCase()
      })
      .then(data => {
        console.log(data)
      })
    ```
22. What log will be made by the following code, after 2 seconds?
    ```javascript
    const p = new Promise(function(resolve, reject) {
       setTimeout(function() {
          resolve("OK");
       }, 2000);
    });
    
    p.then().then(function(data) {
       console.log(data);
    });
    ```
23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process
    ```javascript
    async function f() {
      let result = 'first!';
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
      });
    
      result = await promise;
    
      console.log(result);
    }
    
    f();
    ```
24. Use async await, and fetch to a fact on cats and display it `https://catfact.ninja/fact`. 
    1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM
    2. Make sure to use try and catch
    
    */

// let arrNums = [1, 2, 3, 4, 5];
// let lol = arrNums.splice(0, 6, "1");
// console.log(lol);

// 3. What is the result of the following code :
// javascript

// const oneTwoThree = [1, 2, 3];
// const sevenEightNine = [7, 8, 9];

// const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
// console.log(all);

// 4. What does the following code print to the console?javascript

// let golf = {
//   type: "sport",
//   clubs: {
//     high_end: "taylor made",
//     low_end: "rusty basement clubs",
//   },
// };
// golf.clubs.high_end = "callaway";
// console.log(golf.clubs.high_end);

// 5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.javascript
// const x = function (a, b) {
//   return a * b;
// };

// console.log(x(5, 10));

// 7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?
// ```javascript
// function sayHello() {
//   return "Hello, ";
// }

// function greeting(helloMessage, name) {
//   console.log(helloMessage() + name);
// }

// greeting(sayHello, "JavaScript!");

// 8. Transform this function into an arrow function
//       ```javascript

// let sum = (num1, num2) => num1 + num2;

// sum(40, 2);
// sum(42, 0);

// console.log("the answer to everything is", sum(42, 0));

// 9. What does the following code print to the console? Explain the process and concept behind it
//      ```javascript

// function foo() {
//   function bar() {
//     return "Poppin' bottles";
//   }

//   return bar();
// }
// console.log(foo());

// 10. Which of the following events will you add in the `addEventListener()`method?
//       ☐ click
//       ☐ onclick

// 12. DOM exercise
//       1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions
//       2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red

// const button = document.getElementById("btn");
// const container = document.getElementById("container");

// const createNewPar = () => {
//   let newPar = document.createElement("p");
//   container.appendChild(newPar);
//   newPar.textContent = "lalala";
//   newPar.addEventListener("mouseover", () => {
//     newPar.classList.add("newP");
//   });
// };

// button.addEventListener("click", createNewPar);

// 14. What is the value of `passed` in the following code?
//      ```javascript

// let marks = [67, 60, 89, 90, 67, 42];

// let passed = marks.every(function (m) {
//   console.log(m >= 50);
//   return m >= 50;
// });

// 15. What does the following code log?
//    ```javascript

// let nums = [10, 50, 88];

// let bignums = nums.filter(function (n) {
//   return n > 10;
// });

// console.log(bignums);
// 16. Use a javascript array method to square the value of every element in the array.
//    ```javascript

// const input = [1, 2, 3, 4, 5];
// //code
// // console.log(input); // [ 1, 4, 9, 16, 25]

// input.map((el, index, array) => (array[index] = el * el));
// input.forEach((el, index, array) => (array[index] = el * el));

// console.log(input);

// 16. Use 2 javascript array methods and chain them to return the sum of all the positives ones.
//      ```javascript
// const secondInput = [1, -4, 12, 0, -3, 29, -150];
// //code
// // console.log(total); //42

// let total = secondInput.filter((el) => el > 0).reduce((acc, cur) => acc + cur);

// console.log(total);//42

// 17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.
//      ```javascript

// const input = "George Raymond Richard Martin";

// let initials = input
//   .split(" ")
//   .map((word) => word[0])
//   .join("");
// //code
// console.log(initials); //'GRRM'

// 19. What will be printed in the console
//     ```javascript

// class Item {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//     this.displayInfo = function () {
//       console.log(this.name + " is for $ " + this.price);
//     };
//   }
// }
// const cake = new Item("Chocolate Cake", 10);

// cake.displayInfo();

// 21. What will be the output and why ? What will be the state of the promise ?
//     ```javascript

// Promise.resolve("Success!").then((data) => {
//   console.log(data);
//   let data2 = data.toUpperCase();
//   console.log(data2);
//   return data2;
// });
// .then((data) => {
//   console.log(data);
// });

// 22. What log will be made by the following code, after 2 seconds?
//     ```javascript

// const p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("OK");
//   }, 2000);
// });

// p.then().then(function (data) {
//   console.log(data);
// });

// 23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process
//     ```javascript

// async function f() {
//   let result = "first!";
//   console.log(result);
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 3000);
//   });

//   result = await promise;

//   console.log(result);
// }

// f();

// 24. Use async await, and fetch to a fact on cats and display it `https://catfact.ninja/fact`.
//     1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM
//     2. Make sure to use try and catch

const container = document.getElementById("container");

async function displayCats(factOfCats) {
  // console.log(factOfCats);
  let jsonObj = await factOfCats.json();
  let fact = jsonObj["fact"];
  let newPar = document.createElement("p");
  newPar.textContent = fact;

  container.appendChild(newPar);
}

const fetchData = async function () {
  try {
    let factOfCats = await fetch(`https://catfact.ninja/fact`);
    if (!factOfCats.ok) {
      throw new Error("Wrong API");
    } else {
      displayCats(factOfCats);
    }
  } catch (err) {
    console.log(err.message);
  }
};

fetchData();
