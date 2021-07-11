'use strict';

// NOTE firstName is not in the function scope - so as a next step it will
// search it in the global scope which is parent of function scope
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;

      // NOTE we will get Steven as a firstName
      // beacuse firstly JS look up for a firstName in the current scope
      console.log(str);

      // NOTE this function will be working in the if scope only
      function add(a, b) {
        return a + b;
      }
      //redifine output variable
      output = 'NEW OUTPUT!';

      // NOTE add function will be working here (inside if block)
      //because of strict mode; removing strict mode will make it work
    }
    // NOTE won't log anything since str is inside the child scope
    // console.log(str);

    // THEORY var is function scope and not a block scope
    // therefore we can access it in parent, but never use var variable (use const & let)
    console.log(millenial);

    // we will get new output = "NEW OUTPUT!" because inside the child
    // the variable was taken from global and redefined

    console.log(output);
    //add function here won't work
    //add(2, 3);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
console.log(calcAge(1991));

// NOTE won't be executed because global can't access child scope
// console.log(output);
// console.log(age);
// printAge();
