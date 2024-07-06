const num = 100;
 
const score = new Number(200)
// console.log(score)

// console.log(score.toString().length)
// console.log(score.toFixed(2))

const otherNum = 23.333
// console.log(otherNum.toPrecision(3))

const hundreds = 100000
// console.log(hundreds.toLocaleString()) //100,000
// console.log(hundreds.toLocaleString('en-IN')) //1,00,000

// console.log(Math)
// console.log(Math.abs(-2))
// console.log(Math.round(4.3))

/**
 * Math.ceil(4.2) gives 4
 * Math.floor(4.6) gives 5
 */
 
// console.log(Math.random()) // gives values from 0 to 1
// console.log((Math.random() * 10) + 1)

const min = 10
const max = 20

/**
 * Formula to get any random number within a range
 */
console.log(Math.floor((Math.random() * (max-min+1)) + min))

