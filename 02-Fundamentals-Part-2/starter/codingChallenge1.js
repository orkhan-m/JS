'use strict';

// // create a function (arrow function)
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3
// const dolphinAve = calcAverage(85, 54, 41)
// const koalaAve = calcAverage(23, 34, 27)

// console.log(dolphinAve)
// console.log(koalaAve)

// function checkWinner(koalaAve, dolphinAve) {
//     if(koalaAve > dolphinAve * 2){
//         console.log(`Koalas are the winner! ${koalaAve} vs. ${dolphinAve}`)
//     }else if(koalaAve * 2 < dolphinAve){
//         console.log(`Dolphins are the winner! ${dolphinAve} vs. ${koalaAve}`)
//     }else{
//         console.log(`It's a draw ${koalaAve} : ${dolphinAve}`)
//     }
// }

// checkWinner(koalaAve, dolphinAve)


//CHALLANGE 2
// let bill = 100
// function calcTip(bill){
//     let tip;
//     if (bill >= 50 && bill<=300) {
//         tip = 0.15 
//     } else {
//         tip = 0.2
//     }
//     const tipValue = tip*bill
//     return tipValue
// }

// console.log(calcTip(bill))

// const bills = [125, 555, 44]

// const tips1 = calcTip(bills[0])
// const tips2 = calcTip(bills[1])
// const tips3 = calcTip(bills[2])

// console.log(tips1)
// console.log(tips2)
// console.log(tips3)
// const billsAll = bills[0] + bills[1] + bills[2]
// const tipsAll = tips1 + tips2 + tips3
// const total = [billsAll, tipsAll]

// console.log(total)

//CHALLANGE 3
let mark = {
    name: 'Mark',
    mass: 78,
    height: 1.69,
    
    calcBMI: function(){
        this.bmiVal = Number(this.mass) / Number(this.height) ** 2
        return this.bmiVal
    }
}

let john = {
    name: 'John',
    mass: 92,
    height: 1.95,
    
    calcBMI: function(){
        this.bmiVal = Number(this.mass) / Number(this.height) ** 2
        return this.bmiVal
    }
}

console.log(mark.calcBMI())
console.log(john.calcBMI())

console.log(mark.bmiVal > john.bmiVal ? `Mark's (${mark.bmiVal.toFixed(2)}) BMI is higher than John's (${john.bmiVal.toFixed(2)})` : `John's (${john.bmiVal}) BMI is higher than Mark's (${mark.bmiVal})`)


