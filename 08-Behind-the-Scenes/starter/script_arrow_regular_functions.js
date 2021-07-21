'use strict';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this);
      // error
      //   console.log(this.year >= 1981 && this.year <= 1996);
    };

    // NOTE here we still have access to this keyword
    const self = this;
    const isMillenial2 = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    /* arrow function does not have
    its own this keyword so it will refer to parent function
    for that */
    const isMillenialArrow = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenialArrow();
    /* Inside the function the 
    this keyword should be undefined
    NOTE a regular function call has this key word set to undefined*/
    isMillenial();
    isMillenial2();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
  greet_declaration: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

/* arrow function which does not have its own this 
 key word will go to the global, 
 to get the this key word from global 'window' will be 'this'*/
jonas.greet();
jonas.greet_declaration();
jonas.calcAge();
/* when we try to get a property that 
doesn't exist on an object 
we don't get error we get undefined
*/
console.log(this.firstName);

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

// we can add extra arguments, but they won't be named a, b
addExpr(2, 5, 8, 12);
