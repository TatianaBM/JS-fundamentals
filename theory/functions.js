//*******************************************************Defining functions
// ************function declaration
// this is a syntax to declare a function
// 1. is hoisted meaning it will be moved to the top of the file

import { values } from "lodash"

// 2. such functions always have a name
function plus(a,b) {
    return a+b
}

//***************function expressions
// Such a function can be anonymous; it does not have to have a name
// However, a name can be provided with a function expression.
// 1. Not hoisted
// 2. can be anonymous

// anonymous
const sum = function (a,b) {return a+b}
console.log(sum(1,2))

// with name
const factorial = function fact(n) {
    if( n <= 1) return 1
    return n * fact(n-1)
}
console.log(factorial(5))

// arrow function
const greeting = () => {
    console.log('hello')
}

// ***************************difference between normal function and arrow function 
// 1. syntax 
//function declaration  we can refer higher , and declare at the bottom cause it will be hoised 
function city(name) {
    return `i live in ${name}`
}
// arrow function we defune thru function expression  first declare and use it
const myCity = (city) => `i live in ${city}`
console.log(myCity('zuri'))

// 2. this
//function declaration 
function foo() {
    console.log(this)
}
foo()   // undefined
new foo()  // {}
foo.call('4')

// arrow function does not have this (expect for a case when an arrow function takes this from a parent at the moment it has been delared)
//example
function parentFunc() {
    return () => console.log(this)
}
let savedFunc = parentFunc.call('parentThis')
savedFunc()

// 3. Arguments is array-like object, it is accesible inside function and constains values that we passed as arguments to that function
//function declaration - we have an access to all passed to that function arguments
function args() {
    console.log(arguments)
}
args('a','b','c')
//arrow does not have arguments

// 4. we can create a new instance with a new key word only with function declaration, arrow function is not concstructor so we cant 
function RegularFunction() {
    this.value = 5
}
const instance = new RegularFunction()
console.log(instance.value)











// *****************************************************callback = > is a function that is passed as an argument to another function and is envoked inside of this function
function callback() {
    console.log('i am a callback func')
}
function log(a, callback) {
    console.log(a)
    callback()
}
log(5, callback)