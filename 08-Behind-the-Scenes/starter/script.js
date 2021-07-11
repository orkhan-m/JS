'use strict';

// // NOTE firstName is not in the function scope - so as a next step it will
// // search it in the global scope which is parent of function scope
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}`;

//       // NOTE we will get Steven as a firstName
//       // beacuse firstly JS look up for a firstName in the current scope
//       console.log(str);

//       // NOTE this function will be working in the if scope only
//       function add(a, b) {
//         return a + b;
//       }
//       //redifine output variable
//       output = 'NEW OUTPUT!';

//       // NOTE add function will be working here (inside if block)
//       //because of strict mode; removing strict mode will make it work outside too
//     }
//     // NOTE won't log anything since str is inside the child scope
//     // console.log(str);

//     // THEORY var is function scope and not a block scope
//     // therefore we can access it in parent, but never use var variable (use const & let)
//     console.log(millenial);

//     // we will get new output = "NEW OUTPUT!" because inside the child
//     // the variable was taken from global and redefined

//     console.log(output);
//     //add function here won't work
//     //add(2, 3);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// console.log(calcAge(1991));

// // NOTE won't be executed because global can't access child scope
// // console.log(output);
// // console.log(age);
// // printAge();

// TOPIC 95. Hoisting and TDZ in Practice

// NOTE will be equal to undefined because of VAR
console.log(me);

// let and const will give error because of the
// TEMPORAL DEAD ZONE - TDZ
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// FUnction declaration
// NOTE will give result because of FN declaration
console.log(addDecl(2, 3));

// both function arrow & expression are in TDZ
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

// NOTE Error: Uncaught ReferenceError:
// Cannot access 'addArrow' before initialization
// const addArrow = (a, b) => a + b;

// NOTE Error: Uncaught TypeError: addArrow is not a function
// var addArrow = (a, b) => a + b;

// Example:
// delete numProducts if it is false i.e. equal to 0
// but since we used var it is undefined = False
// and will be deleted because of var

console.log(numProducts);

// undefined will trigger execution of function below
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

// NOTE window in console
// x will be visible in window object but let and const won't be declared

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
