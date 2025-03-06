// datatypes acc to how they are stored in memory they are classified as two primitive and non primitive


//1. Primitive (call by value)-> if copied then changes are made in copy og remains same 
//-> String, Number, Boolean, null, undefined, Symbol (used make value unique), BigInt 

//symbol 
const id =Symbol("123")
const anotherid =Symbol("123")

// console.log(id === anotherid) //false unique so false


//2. Reference Type / Non Primitive (in memory reference is allocated)
// Array, Objects, Functions  --> datatype are functions --> but of functions is object functions

const heros = ["yash","shaktiman","naagraj"]
// console.log(heros)
const heroObj = {
    name:"yash",
    age:20
}
// console.log(typeof heroObj)

//FUNCTIONS
//declaration
const myfunction = function (){
    // console.log("myFunction")s
}
//call 
myfunction();

// console.log(typeof(myfunction))





// ***************************MEMORY************************************
// 2types of memory 
//1. Stack Memory (primitive data type) --> we get copy of variable 
//2. Heap Memoruy (NonPremitive data type) --> we get reference

let myName = "YashChinawale" // -> stack 
let anotherName = myName  // copy of myName
anotherName = "Chinawale"  // change in copy not change in og myName
// console.log(myName) // so value of myName is same
// console.log(anotherName) //changed because of change in copy

// variable myObj is stored in stack with ref to data ie name and email in heap --> var myObj gets ref of heap memeory which has data 
let myObj = {   
    name:"Yash",
    email:"y@g.com"
}
//now if another obj is assigned the value of myObj then it means that ref to heap memory is given 
let anotherObj = myObj
//console.log(myObj) // ref to heap memory
//console.log(anotherObj) // ref to heap memory 

// change in any one obj will change ref so all two changes 
anotherObj.email = "yash@gmail.com"

//console.log(myObj) // both changefd due to same ref 
//console.log(anotherObj) //both changed due to same ref 