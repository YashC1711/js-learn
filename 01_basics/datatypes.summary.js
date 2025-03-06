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