let massMark = 78
let heightMark = 1.69 
let BMIMark = massMark / heightMark ** 2

console.log("BMI 1:" + BMIMark)
massJohn = 95
heightJohn = 1.88
let BMIJohn = massJohn / heightJohn ** 2
console.log("BMI 2: " + BMIJohn)

let markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's? True:Yes; False:No"
    + " RESULT: " +markHigherBMI)

// cODDING CHALANGE 2
if(markHigherBMI){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
}

let dolphins1 = 97
let dolphins2 = 100
let dolphins3 = 120

let koala1 = 100
let koala2 =97
let koala3 =120

let averageKoala = (koala1 + koala2 + koala3)/3
let averageDolphins = (dolphins1 + dolphins2 + dolphins3)/3

console.log(`Koalas: ${averageKoala} Dolphins: ${averageDolphins}`)

if (averageKoala > averageDolphins && averageKoala >= 100){
    console.log(`Koalas won!`)
}else if(averageKoala < averageDolphins && averageDolphins >= 100){
    console.log(`Dolphins won!`)
}else if(averageKoala <= 100 && averageDolphins <= 100){
    console.log(`Both less than 100!`)
}else if(averageKoala === averageDolphins){
    console.log(`It a draw both won!`)
}

const language = "Rus";
switch(language){
    case "Chinese":
    case "Mandarin":
        console.log("MOST number of native speakers");
        break;
    case "Spanish":
        console.log("2nd place number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("5th most spoken language");
        break
    default:
        console.log("Great language too")
}

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

const bill = 10;
const tip = 50 <= bill && bill <= 300 ? 15 : 20;
console.log(tip) 

let tip2 = bill * tip /100
let total = bill * tip /100 + bill
console.log(`The bill was ${bill} and the tip was ${tip2}. Total is ${total}`)
