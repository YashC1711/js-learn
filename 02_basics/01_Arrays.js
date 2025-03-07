//declaration
// const myArr = [0,1,2,3,4,5,true,"yash"] //element can be diffrent datatype 
//array in js can be resizable   
const myArr = [0,1,2,3,4,5] 
const myHeros = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4)
//array also has prototypes
// console.log(myArr[0]); //zero based index

// In array if copy is made shallow copies are made that is copy to same refrence --> 
// ie if changed in copy changed in og 



// *******************METHODS**************************
myArr.push(10) //push element at last in array 
// console.log(myArr)
myArr.pop() //removes last element 
// console.log(myArr)
myArr.unshift(9) //adds element in first 
// console.log(myArr)
myArr.shift() //removes first element
// console.log(myArr)

// console.log(myArr.includes(9))  //boolean tru or false
// console.log(myArr.indexOf(9)) //return index as 0 index but if not present then -1



const newArr  = myArr.join() //bind the old array to new but in string 
// console.log(typeof newArr) //string
// console.log(myArr)


//slice , splice
// console.log("A ",myArr); 
const myn1 = myArr.slice(1,3)  //start and end index --> end index is not included --> doesnot modify og array
// console.log(myn1)
// console.log("B ",myArr)
const myn2 = myArr.splice(1,3) //start and end index --> end index included --> removes splice element from of array
// console.log(myn2)
// console.log("C ",myArr)
