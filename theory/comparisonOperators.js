// Comparison operators are used to compare two values.
// Comparison operators always return true or false.

let x = 5
// ==  equal to
console.log(x == 5)  //true
console.log(x == '5') //true
console.log(true == 1)  // true
console.log(false == 0)  // true
console.log(null == undefined)  // true
console.log([] == false)  // true    [] => '' => 0
console.log([1,2] == '1,2')  // true  [1,2] => '1,2'
console.log(0 == -0)  // true

console.log(NaN == NaN)  // false Nan is never equal anything

// === equal value and equal type
console.log(x === 5)  //true
console.log(x === '5') // false
console.log(0 === -0)   //true

// != not equal
console.log(x != 8) // true
console.log(x != '5') // false

//!==	not equal value or not equal type
console.log(x !== 8) // true
console.log(x !== '5') //true

console.log(NaN == NaN)   //false
console.log(Number.isNaN(NaN))  //true
console.log(Number.isNaN('hello'))  //false  hello cant be turned into NaN
console.log(Number.isNaN(0/0))  //true   0 devided by 0 gives NaN
