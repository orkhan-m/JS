'use strict';

// NOTE refer to window object
console.log(this);
console.log('__________________________________');

// inside regular function this is undefined because
// we are in strict mode
// NOTE without strict mode it will refer to window
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);
console.log('__________________________________');

// arrow function does not have its own this function
// while function expression is having its own this keyword but undefined
// NOTE it will refer to window
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);
console.log('__________________________________');

// this will refer to object jonas
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

// this refer to jonas because jonas is the object that call the function
jonas.calcAge();
console.log('__________________________________');

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
// NOTE THEORY this will refer to matilda, not to jonas
// because the method calcAge was called by matilda object
matilda.calcAge();
console.log('__________________________________');

const f = jonas.calcAge;
// will give Uncaught TypeError: Cannot read property 'year' of undefined
// because f is a regular function and it does not have owner
// like with jonas and matilda
f();
