//dates are acl;culated from jan 1 1970
//calculated in ms 

let myDate = new Date()
// console.log(myDate) // by default 

// console.log(myDate.toString()) // to string 
// Thu Mar 06 2025 06:18:12 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()) //Thu Mar 06 2025
// console.log(myDate.toLocaleDateString()) // 3/6/2025

// console.log(typeof myDate) //object

// let myCustomDate = new Date(2002,10,17); //month here is 0-11
let myCustomDate = new Date(2002,10,17,5,3);
// console.log(myCustomDate.toLocaleString()) //11/17/2002, 5:03:00 AM

let myCustomeDateNew = new Date ("11-17-2002") // here month is 1-12 //format diffrent
// console.log(myCustomeDateNew.toLocaleString())

let timeStamp = Date.now()
// console.log(timeStamp)
//if u want to compare the value of custome date from default jan 1 1970
// console.log(myCustomDate.getTime())


// console.log(Math.floor(Date.now()/1000)) //by default in ms converted to sec


const newDateYash = new Date(Date.now()); // Convert timestamp to Date object
console.log(newDateYash.toLocaleString('default', {
    weekday: "long",
}));