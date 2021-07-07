'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting consition
score0El.textContent = 0;
score1El.textContent = 0;
// NOTE Hidden element added to CSS file
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0; // player number 0 is active player
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // remove or add the class, remove if there add if class is not there
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality TOPIC
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generationg a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Diplay the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      // current0El.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // score[1] = score[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.remove('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  if (!playing) {
    document
      .querySelector(`.player--winner`)
      .classList.remove('player--winner');
  }
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0; // player number 0 is active player
  document.querySelector('.dice').classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active'); // if we say to add it won't add the second one
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.getElementById(`current--0`).textContent = currentScore;
  document.getElementById(`current--1`).textContent = currentScore;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
});

// btnNew.addEventListener('click', function())
