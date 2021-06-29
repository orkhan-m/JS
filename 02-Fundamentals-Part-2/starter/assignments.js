'use strict';
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

// const country = "Azerbaijan"
// const population = 50
// const capitalCity = "Baku"

// function describeCountry(country, population, capitalCity){
//     console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`)
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const Aze = describeCountry( "Aze",  50, 'Baku')
// const USA = describeCountry( "USA",  140, 'Washington')
// const Ger = describeCountry( "Germany",  70, 'Berlin')

// console.log(Aze)
// console.log(USA)
// console.log(Ger)

// function percentageOfWorld1(population){
//     return (population / 7900) * 100 
// }

// const China = percentageOfWorld1(1441)
// console.log(China)
// const Aze = percentageOfWorld1(10)
// const USA = percentageOfWorld1(300)
// console.log(Aze)
// console.log(USA)

// const percentageOfWorld2 = function(population){
//     return (population / 7900) * 100
// }

// const russia = percentageOfWorld2(140)
// const germany = percentageOfWorld2(70)
// const france = percentageOfWorld2(70)
// console.log(russia)
// console.log(germany)
// console.log(france)

// function describePopulation(country, population){
//     const percentage = percentageOfWorld1(population)
//     return `${country} has ${population} million people, which is about ${Number(percentage).toFixed(2)}% of the worl. `
// }

// console.log(describePopulation('Aze', 10))

// const populations = [10, 15, 30, 65]
// console.log(populations.length === 4)

// function percentageOfWorld1(population){
//     return (population / 7900) * 100 
// }

// const percentages = [Number(percentageOfWorld1(populations[0]).toFixed(2)), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])]
// console.log(percentages) 

// const countries = ['Russia', 'Georgia', 'Armenia', 'Turkey', 'Iran'];
// console.log(countries)

// countries.push('Utopia')
// console.log(countries)

// countries.pop()
// console.log(countries)

// if (!countries.includes('Germany')){
//     console.log(`Probably not a central European country :D 🗺`)
// }

// console.log(countries.indexOf('Armenia'));
// countries[2] = 'Western Azerbaijan'

// console.log(countries)

// const myCountry = {
//     country: 'Azerbaijan',
//     capital: 'Baku',
//     language: 'Azerbaijani',
//     population: 11,
//     neighbours: ['Russia', 'Georgia', 'Armenia', 'Turkey', 'Iran'],
//     describe: function (){
//         return `${this.capital} is the capital of ${this.country}. It has a population of ${this.population} million and it borders with ${this.neighbours.length} countries. ${this.isIsland() === false ? "It is not an island" : "It is an island"}`
//     },
//     isIsland: function(){
//         return this.neighbours.length === 0 ? true : false
//     }
// }

// console.log(myCountry.describe())

// for(let i = 1; i <= 50; i++)
//     console.log(`Voter number ${i} is currently voting`)


// const populations = [10, 15, 30, 65]
// let percentages2 = [];

// function percentageOfWorld1(population){
//     return (population / 7900) * 100 
// }

// for (let i = 0; i < populations.length; i++){
//     percentages2.push(percentageOfWorld1(populations[i]).toFixed(2))
// }

// console.log(percentages2)

// // const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// // 'Russia']];

// // for (let list = 0; list < listOfNeighbours.length; list++) {
// //     for (let elem = 0; elem < listOfNeighbours[list].length; elem++){
// //         console.log(`Neighbour: ${listOfNeighbours[list][elem]}`)
// //     }
// // }
// let percentages3 = [];

// let i = 0
// while (i < populations.length) {
//     percentages3.push(percentageOfWorld1(populations[i]).toFixed(2));
//     i++
// }

// console.log(percentages3)
