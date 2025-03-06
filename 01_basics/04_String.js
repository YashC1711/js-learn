const name = "Yash"
const age  = 23
//console.log(name+age+" age") // this syntax is outdated we use ``

//console.log(`My name is ${name.toUpperCase()} and i am ${age} year old...`) 
//modern syntax --> string interpolation


// ***************** STRINGS ********************
const myName = new String("Hello-World-from-yash")  // we get some string methods and also it is object of string with key value pairs 0:"Y" like this 
//--> to see the methods paste this in chrome console 
// console.log(myName)
// console.log(myName[0])
// console.log(myName.__proto__) //prototype

// console.log(myName.length)
// console.log(myName.toUpperCase()) // this is function so ()
// console.log(myName.charAt(2))
// console.log(myName.indexOf("Y"))

const newString  = myName.substring(0,4) // 4 is excluded
// console.log(newString)
// const anotherString = myName.slice(1,4) // 4 excluded
const anotherString = myName.slice(-5,7)
// console.log(anotherString)

const newStringOne = "      Yas   h       "
// console.log(newStringOne)
// console.log(newStringOne.trim()) //removes whitespaces from start or end

const url = "https://yash.com/yash%20chinawale"
// console.log(url.replace("%20",'-'))

// console.log(url.includes("hcv"))

console.log(myName.split("-"))




