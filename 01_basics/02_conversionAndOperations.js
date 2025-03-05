//********************************CONVERT TO NUMBER****************************** */
let score = true
console.log(typeof score) //same number 
console.log(typeof(score)) //same number 

let valueInNumber = Number(score) 
//this will convert any datatype to number IMP {Number} is used
console.log(typeof valueInNumber) 
//but if string contains charecter then type will be number but value will be NAN
//but if undefined then type will be number but value will be NAN
//but if null then type will be number but value will be 0
//but if boolean then type will be number but value will be 0/1
console.log(valueInNumber) 

// "33" -> 33
// null -> 0
// "33aaa" -> NAN
// undefined -> NaN
// true -> 1
//********************************************************************** */


//******************************CONVERT TO BOOLEAN********************** */
//change to boolean
let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn)
//any value will be converted to true but empty value will be false and 0-> false
console.log(booleanIsLoggedIn);

//1->true 
//0-> false
//"yash" -> true 
//"" -> false
//********************************************************************** */



//******************************CONVERT TO STRING********************** */

let age = 33
let convertToString = String(age)
console.log(typeof convertToString)
console.log(convertToString)

//********************************************************************************************** */
