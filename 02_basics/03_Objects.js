// when objects are formed by constructor then they are formed by --> SINGLETON
//declaration
// Object.create //sibgleton

// here we will study object Literals-->

//declaration
//objects are accessed by key or value 
// key can be written directly considered as string

const mySym = Symbol("key1")
// console.log(typeof mySym)
const JsUser = { //1
  name:"Yash",
  "fullName":"Yash Chinawale", 
  // mySym:"myKEY1",  //use this as a symbol --> unique
  [mySym]:"myKEY1",  // by using [] u can use it as a symbol
  age:18,
  location:"Pune",
  email:"y@g.com",
  isLoggedIn:false,
  lastLogin:["Monday","Tuesday"] //can pass array
} 


//how to acces
// console.log(JsUser.email) //1 
// console.log(JsUser["email"]) //2 

// console.log(JsUser.fullName) // can be used now

// console.log(JsUser.mySym) // this will run but datatype will be string
// console.log(typeof JsUser.mySym)

// console.log(JsUser[mySym]) // actual way of using symbol or accesing it   ==> acces symbol by []

JsUser.email = "yashchinawale@ksb.com"  // can change the value of any key
// console.log(JsUser)
// Object.freeze(JsUser) // can freeze the value and now onwards it avlue of any key wont change 
JsUser.email = "yashchinawale@Google.com" // this will not be applicable 
// console.log(JsUser)


JsUser.greeting = function(){
  console.log("Hello from jsuser")
}
JsUser.greetingTwo = function(){
  console.log(`Hello from ${this.name}`) // here this refers to the object JsUser
}
// console.log(JsUser.greeting) // only greeting wont make any change --> get ref of function
// console.log(JsUser.greeting()) // () functions
console.log(JsUser.greetingTwo())