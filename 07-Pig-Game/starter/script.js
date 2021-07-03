'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Starting consition
score0El.textCOntent = 0;
score1El.textContent = 0;

// NOTE Hidden element added to CSS file
diceEl.classList.add('hidden');
