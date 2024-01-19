const score = new Number(120)
console.log(score)
console.log(score.toString())
console.log(score.toFixed(2)) // It Fixed the digit value after the decimal

const run = 7834.8341
console.log(run.toPrecision(5))

//--------------------------Maths-----------------------------
console.log(Math);
console.log(Math.abs(-76));  //abs used to convert negative value to Positive value
console.log(Math.round(6.9))
console.log(Math.ceil(4.6))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.9))
console.log(Math.max(2,4,3,7))
console.log(Math.min(1,8,3,9))

console.log(Math.random()) // This will always gives random number between 0 and 1 
console.log((Math.random()*10) + 1 ) // This will gives the value from 1 to 9
const min = 10
const max = 20 
console.log(Math.random()* (max-min+1) + min )