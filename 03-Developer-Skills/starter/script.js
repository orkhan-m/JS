// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// TOPIC
// Problem
// We work for a company building a smart home thermometer.
// Given an array of temperatures colculate the amplitude.
// Note: Sensor error is possible

// 1) Ask questions:
// - What is error and what we do with it.
// - How to compute max and min temperatures?

// 2) Breaking up into sub-problems
// - How to ignore error?
// - Find max value
// - Find min value
// - Subtrack min from max

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  temps = temps.filter((e) => e !== 'error');
  console.log(temps);
  const maxTemp = Math.max.apply(Math, temps);
  console.log(maxTemp);
  const minTemp = Math.max.apply(Math, temps);
  console.log(minTemp);
  const amplitude = maxTemp - minTemp;
  return amplitude;
};

console.log(calcTempAmplitude(temperatures));
