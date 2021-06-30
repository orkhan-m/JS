'use strict';

// // NOTE select element from HTML
// console.log(document.querySelector('.message')); //class are selected with . dot; id's are selected with # hash

// console.log(document.querySelector('.message').textContent);

// // TOPIC 77. Select and manipulate elements
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // . is the class selector
// console.log(document.querySelector('.guess').value);
// // with the input field to get actual avlue we use .value
// // NOTE only input elements has value
// document.querySelector('.guess').value = 23;
// // now instead of empty field it will be 23
// console.log(document.querySelector('.guess').value);

// TOPIC 73. Handling CLick Events
// addEventListener - listen for events (name of event click)
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;
// 'click'; 'dblclick'; 'mousedown'                  !
document.querySelector('.check').addEventListener('click', function () {
  // guess is the value retrieved from gurss class
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number😡';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Right value 🎉';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // when the number is higher
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your value is too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your value is too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    // when the number is lower
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// git commit -m '75. Manipulating CSS styles'
