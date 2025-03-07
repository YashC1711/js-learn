// const obj = new Object() // singleton object declaration
const obj = {} // non singleton object


obj.id = "123abc"
obj.name = "Yash"
obj.isLoggedIn = false
// console.log(obj)

const regUser = {
  email:"sum@g.com",
  fullname:{
    userFullname:{
      fname:"yash",
      lname:"chinawale"
    }
  }
}

// console.log(regUser.fullname.userFullname.fname) // acces nesting of objectsss
// console.log(regUser?.fullname?.userFullname?.lname) //optional chaining check if exists

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2} // not correct way 

// const obj3 = Object.assign(obj1,obj2) // can be done like this but use {} at start
// const obj3 = Object.assign({},obj1,obj2) //returns modified object target 
//syntax is Object.assign(target,source) --> target is {}


const obj3 = {...obj1,...obj2}  //spread operator 
// console.log(obj3) 


// console.log(Object.keys(obj)) // returns array of keeys so that we can use it convinently
// console.log(Object.values(obj)) // returns array of values so that we can use it convinently
// console.log(Object.entries(obj)) // returns array of arays of key value so that we can use it convinently
// console.log(obj.hasOwnProperty("isLogged")) // tells if key of this isLogged present or not 








// ***************************DESTRUCTURE***************************************
const course = {
  coursename:"js in hindi",
  price:"9999999",
  courceinstructor:"hitest"
}

// const {courceinstructor}=course   // also like this but can give custom name
// console.log(courceinstructor)    
// destructure syntax --> const {key name that need to be destructured } = obj_name
const {courceinstructor : instructor}=course  
// console.log(instructor)





//***********************react destructure******************************
// const navbar = (props.company) =>{

// }
// const navbar = ({company}) =>{

// }
// navbar(company="yash")