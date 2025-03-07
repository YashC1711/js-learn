const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["flash","superman","batman"]

// marvel_heros.push(dc_heros) // array ke andar array --> in existing array 
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])


// const new_heros = marvel_heros.concat(dc_heros) // returns a new array so store it in new array
// console.log(new_heros)



//*****************SPREAD OPERATOR********************* */
const all_heros = [...marvel_heros,...dc_heros] //spread all elements in array 
// console.log(all_heros)


// *******************************FLAT ARRAY ********************************
const arrayone = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const usable_array = arrayone.flat(Infinity) 
//flats the array from deepth --> if Infinity is mention then it flattens all the array 
// console.log(usable_array)



// console.log(Array.isArray(usable_array))// tells array or not --> boolean
// console.log(Array.isArray("Yash"))// tells array or not --> boolean
// console.log(Array.from("Yash"))// converts into the array ["Y","a","s","h"]
// u can also pass element from which u need to make an arra in Array.from({})
//if it is not able to make a array then it will return empty array  []
// console.log(Array.from({name:"YashChinawale"}))   //[] --> not able to make

// console.log(Array.from({ length: 5 }, (_, index) => index * 2))

//object can also be converted to array 
// const obj = {length:4,0:"1",1:"2",2:"3",3:"4"}
const obj = {0:"1",1:"2",2:"3",3:"4",length:4} /// need to specify length first or last
console.log(Array.from(obj))

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3)) // .of also forms the array







