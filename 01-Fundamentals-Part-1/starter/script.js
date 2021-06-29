let js = "amazing";
console.log(40 + 5 + 12);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

//you can't start a variable name with a number
//let 3years = 3;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let javascriptIsFun = true;
console.log(true);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "String");

// Change the variable
javascriptIsFun = "YES!";

// the type of null is object and it is an error
console.log(typeof null);

// ___________________________________________________
// declaring a value
// reassigning the variable - we mutated the variable
let age = 30;
age = 31;

//constant variable - immutable
const birthYear = 1991;
// birthYear = 1991; this will give error because we can't reassign const

// var way
var job = "programmer";
job = "teacher";

// another way defining, variable don't do that
lastName = "Mirzayev";
console.log(lastName);

// ______________________________________________
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas * 10, ageSarah / 10, 2 ** 3);
// 2 ** 3 means 2 to power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Dinozavr";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

let now = 2021;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

// why comparison is done after the minus operation
console.log(now - 1991 > now - 2018);

// = (assignment) works from right - to - left
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const firstName = "Orkhan";
const job = "teacher";
const birthYear = 1996;
const year = 2037;

const orkhan =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(orkhan);

const orkhanNew = `I'm ${(d = firstName)}, a ${
  year - birthYear
} year old ${job}!`;
console.log(orkhanNew);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
}

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another 
${yearsLeft} years ✌`);
}

let century;
const birthYear = 2011;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// 20. Type Conversion and Coercion
// Type Conversion (manually) & Coercion (js automatically)
// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jack"));
console.log(typeof NaN); // Not a Number

console.log(String(23), 23);

// type coercion
// automatically converts number to string
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");

console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "2");

let n = "1" + 1; // '11
n = n - 1;
console.log(n);

// plus is prioritizing string +++++++++++++++++++++++++++++
const myNumber = "10" - "4" - "3" - 2 + "5";
console.log(myNumber, typeof myNumber);

// 5 falsy values 0, ``, undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jones"));
console.log(Boolean({})); //empty object
console.log(Boolean(``));

const money = 0;
if (money) {
  //  js automatically convert number to boolean because of if
  console.log("Don't spend it all 💕");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is undefined");
}

//if one line of i
const age = 18;
if (age === 18) console.log("You just became an adult!");

//=== strict equality does not do type coercion
//==  loss equality does type coersion

//not executed
if ("18" === 18) console.log("You just became an adult!");

if (18 == "18") console.log("Loose equality works!");

const favourite = Number(prompt("What's your favourite number?"));
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is amazing number!");
} else if (favourite === 7) {
  console.log("Seven is also a cool number!");
} else {
  console.log("That is a shitty number!");
}

if (favourite !== 23) {
  // != loose different
  console.log("Why not 23?");
}

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && isTired) {
  console.log("Sarah can drive");
} else {
  console.log("Somebody else shoulddrive...");
}

// Switch Statement
const day = "wednesday";
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "thuesday":
    console.log("Preaper theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Brush the teeth!");
    console.log("Work is fun!");
    break;
  case "friday":
  case "saturday":
    console.log("It is saturday!");
    break;
  case "sunday":
    console.log("Code");
    break;
  default:
    console.log("Not a valid day!");
}

Expressions`${"here we put expressions"}`;
3 + 4;
1991;
true && false && !false;

// statement (doesn't produce a value)
if (23 > 10) {
  const str = "23 is bigger";
}

console.log("Git practice");

//condition operator (Ternary) - it is producing an expression
const age = 15;
age >= 18
  ? console.log(`I like to drink wine 🍷`)
  : console.log(`I like to drink water`);

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I am a big fan of ${drink2}`);
