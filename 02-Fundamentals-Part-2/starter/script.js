'use strict';   // activate strict mode should be at the beginning of the page

// let hasDriversLicense = false;
// let passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive!')

// const interface = 'Audio';
// const private = 534;         // STRICT MODE WILL PREVENT BECAUSE THE NAME IS RESERVED

// FUNCTIONS
// function logger() {
//     console.log('My name is Jonas');
// }

// // calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// fruitProcessor(3,4) // will run the function but won't assign its values to anything

// const appleJuice = fruitProcessor(5, 0) // assign value from function to a appleJuice
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4);  // 
// console.log(appleOrangeJuice)

//FUNCTION DECLARATION (function can be called before declaration function)
// const age0 = calcAge(1990)
// console.log(age0)

// function calcAge(birthYear) {       // birthYear is PARAMETER
//     return 2037 - birthYear
// }

// calcAge(1996)       // 1996 is ARGUMENT

// const age1 = calcAge(1996);        // function declaration
// console.log(age1);

// // FUNCTION EXPRESSION (expressions produce values)
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// const age2 = calcAge2(2000)
// console.log(age1, age2)

// ARROW FUNCTION don't need curly bracers and return is not necessary either
// birthYear => 2037 - birthYear;
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1900)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear 
//     const retirement = 65 - age
//     return `${firstName} retires in ${retirement}`; 
// }

// console.log(yearsUntilRetirement(1996, `Orkhan` ));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
    
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// // console.log(fruitProcessor(2, 3))
// // FUNCTION REVIEW
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear); 
//     const retirement = 65 - age;
    
//     if (retirement>0) {
//         return retirement
//     } else {
//         console.log(`${firstName} has already retired 🎊`)   // won't be read because function already returned something
//         return -1
//     }

//     // return retirement;
//     // return `${firstName} retires in ${retirement} years`; 
// }

// console.log(yearsUntilRetirement(1996, 'Orkhan'))
// console.log(yearsUntilRetirement(1950, 'Mike'))

// ARRAYS is a data structure
// const friend1 = "Mike";
// const friend2 = "Steven"
// const friend3 = "Peter"

// // create an array (more often)
// const friends = ['Mike', 'Steven', 'Peter'];
// console.log(friends);

// // create an array
// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length)

// // get last element from array
// console.log(friends[friends.length - 1])

// // change one friend mutate an array
// friends[2] = 'Jay'
// console.log(friends[2])

// const jonas = ['Jonas', 'Smith', 2037 - 1991, 'Teacher', friends]
// console.log(jonas)


// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }
// const years = [1990, 1967, 2002, 2010, 2018]

// // console.log(calcAge(years))
// // // operations convert array to string 
// // console.log(years + 10)
// // console.log(years - 10)

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])
// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages)

// const friends = ['Michael', 'Steven', 'Peter'];
// //add element to the end of array
// const newLength = friends.push('Jay')
// console.log(friends);
// console.log(newLength)

// // add element to the beginning of the array
// friends.unshift('John');
// console.log(friends)

// //remove last element
// friends.pop();

// // pop returns a value,removed element
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// //remove first element
// friends.shift();
// console.log(friends);

// //return index of the element
// console.log(friends.indexOf('Steven'))

// //if element is not there
// console.log(friends.indexOf('Steven'))

// // return true if the element 
// console.log(friends.includes('Steven'))

// friends.push(23);
// // strict condition is checked
// console.log(friends.includes('23'))

// if (friends.includes('Peter')) {
//     console.log('You have a friend called Steven')
// }

// OBJECTS order in objects does not matter cause we don't need order
// const jonasArray = [
//     'Jonas',
//     'Smith',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ] 
// // create an object
// const jonas = {
//     firstName: 'Jonas',
//     lastName: ' Smith',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }
// console.log(jonas)

// Dot vs. Bracket Method for OBJECTS
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Smith',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// dot notation
// console.log(jonas.lastName)
// console.log(jonas['lastName'])

// // different way of using Bracket method
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(jonas.interestedIn)  // result will be undefined
// console.log(jonas[interestedIn]) // expression 'interestedIn' is going to be evaluated

// jonas.location = 'Portugal'
// jonas['twitter'] = '@jonasschmedtman'
// console.log(jonas)

// if (jonas[interestedIn]){       // undefined is a falsy value
//     console.log(jonas[interestedIn]);
// }else{
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }


// // Challange
// // 'Jonas has 3 friends, and his best friend is called Michael.'
// console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`)

// OBJECT METHOD
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Smith',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     // declaration won't work here: const calcAge = function(...
//     // calcAge: function(birthYear){
//     //     return 2037 - birthYear;
//     // }

// //THIS is refering to the OBJECT jonas
//     // calcAge: function(){
//     //     console.log(this)
//     //     return 2037 - this.birthYear
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear
//         return this.age;
//     },

//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()} years old teacher, and he ${this.hasDriverLicense ? "has driving license" : "doesn't have driving license"}`
//     }
// }

// console.log(jonas.calcAge())
// // console.log(jonas['calcAge'](1991))

// // CHALLANGE
// // "Jonas is a 46 year old teacher, and he has a drivers license"
// // console.log(`${jonas.firstName} is a ${jonas.age} years old teacher, and he ${jonas.hasDriverLicense ? "has driving license" : "doesn't have driving license"}`)
// console.log(jonas.getSummary())
// console.log(jonas.age)

// FOR LOOP keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
// }

// const jonas = [
//     'Jonas',
//     'Smith',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ]

// const types = [];
// const types1 = [];

// // jonas[5] does not exist

// for(let i = 0; i < jonas.length; i++){
//     console.log(jonas[i], typeof jonas[i]);

//     types[i] = typeof jonas[i]
//     types1.push(typeof jonas[i])
// }

// console.log(types);
// console.log(types1);
// // to change value in array;
// // types[0] = 'string';

// const years = [1991, 2007, 1960, 2020]
// const age = []

// for (let i = 0; i < years.length; i++){
//     age.push(2037 - years[i])
// }

// console.log(age)

// // CONTINUE & BREAK
// // CONTINUE - to exit current iteration loop
// //BREAK - completely stop the loop

// // PRINT ONLY STRINGS BY MISSING NON-STRINGS
// console.log('--- ONLY STRINGS ---')
// for(let i = 0; i < jonas.length; i++){
//     if(typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// AS SOON AS NUMBER IS FOUND BREAK THE LOOP
// console.log('--- BREAK WITH NUMBER ---')
// for(let i = 0; i < jonas.length; i++){
//     if(typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }


// const jonas = [
//     'Jonas',
//     'Smith',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]

// for (let i = jonas.length-1; i >= 0 ; i--){
//     console.log(jonas[i])
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--------------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
//     }
// }

// let rep = 1;
// while (rep <= 10){
//     console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++
// }

// // number between 0 and 1
// let dice = Math.trunc(Math.random() * 6)
// console.log(dice)

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Loop is about to end ...`)
// }