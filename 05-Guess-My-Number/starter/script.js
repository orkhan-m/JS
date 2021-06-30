'use strict';

// NOTE select element from HTML
console.log(document.querySelector('.message')); //class are selected with . dot; id's are selected with # hash

console.log(document.querySelector('.message').textContent);

// TOPIC 77. Select and manipulate elements
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// . is the class selector
console.log(document.querySelector('.guess').value);
// with the input field to get actual avlue we use .value
// NOTE only input elements has value
document.querySelector('.guess').value = 23;
// now instead of empty field it will be 23
console.log(document.querySelector('.guess').value);
