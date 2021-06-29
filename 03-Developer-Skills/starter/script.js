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

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   temps = temps.filter((e) => e !== 'error');
//   console.log(temps);
//   const maxTemp = Math.max.apply(Math, temps);
//   console.log(`First max: ${maxTemp}`);
//   const minTemp = Math.min.apply(Math, temps);
//   console.log(`First min: ${minTemp}`);
//   const amplitude = maxTemp - minTemp;
//   return amplitude;
// };

// console.log(`First aplitude: ${calcTempAmplitude(temperatures)}`);

// let max = temperatures[0];
// for (let i = 1; i < temperatures.length; i++) {
//   if (typeof temperatures[i] === 'string') continue;
//   if (temperatures[i] > max) {
//     max = temperatures[i];
//   }
// }

// console.log(`Second version max: ${max}`);

// let min = temperatures[0];
// for (let i = 1; i < temperatures.length; i++) {
//   if (typeof temperatures[i] === 'string') continue;
//   if (temperatures[i] < min) {
//     min = temperatures[i];
//   }
// }

// console.log(`Second version max: ${min}`);

// const aplitude2 = max - min;
// console.log(`Second version max: ${aplitude2}`);

// // TOPIC
// // Same exercise with 2 arrays.
// // Solution: merge the arrays and find max/min
// const temperatures2 = [3, 12, 66, 55, 'error', 9];
// const temperatures1and2 = temperatures.concat(temperatures2);

// console.log(`Aplitude of 1 & 2: ${calcTempAmplitude(temperatures1and2)}`);

// // TOPIC Debugging
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Degrees celsius'),
//   };
//   console.log(measurement);
//   console.table(measurement);

//   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);
//   //TOPIC
//   debugger;
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());
const fc = [17, 21, 23];
const fc2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string += `...${arr[i]} in ${i + 1} days`;
  }
  return string;
}

console.log(printForecast(fc2));
console.log(printForecast(fc2));
