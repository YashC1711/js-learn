// ***************************************NUMBERS**********************************

const score = 400 //old way 
// console.log(score)
const balance = new Number(400) //can use properties  
// console.log(balance)
// console.log(balance.toString().length) //has more properties
// console.log(balance.toFixed(2)) //fixed two values after decimal
const precisionCheck = 123.932
// console.log(precisionCheck.toPrecision(3)) //priority to value before decimal

const hundred =10000000
// console.log(hundred.toLocaleString('en-IN')) //value acc to India






// ******************************MATH***************************************

// console.log(Math);
// console.log(Math.abs(-4)); //change negative to positive
// console.log(Math.round(4.5)) //roundoffffffff
// console.log(Math.ceil(4.2)) //top value 
// console.log(Math.floor(4.9)) //lower value
// console.log(Math.min(4.2,4.1,4.7)) //min value form values

// console.log(Math.floor(Math.random()*10)) //choose from 0 to 1 Math.random


const min =10
const max = 20
//max-min is for range and +min
console.log(Math.floor(Math.random() * (max-min +1))+min)


