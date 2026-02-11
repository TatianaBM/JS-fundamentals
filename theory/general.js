// js has two modes: strict and sloppy  

// var let const
// modern code does not use var
// var vs let : var does not have extra check whether it was already declared therefore var has more efficiency
// key differences:
// 1. scope: var has global scope, let & const block scope
// 2. hoising: actually all variables are being hoised to the top of their scope, but var has value undefined if declared before we call it
console.log(x)  // underfined
var x = 5
// but let and const we can only reference after initialisation
console.log(y)   // we are not getting error here
let y = 8
// 3. declaration and re-assign: we must declare and assign a value to const at the moment of declaration; we can declare var and let but 
// assign a value later; var we can redeclare with the same name
var a = 1
var a = 2
console.log(a)
{
    var a = 5
}
console.log(a)

let b = 4
//let b = 8  // cant redeclare
{
    let b = 8
}
let h
console.log(h)   // undefined

const c = 7
//const c = 8  // error cant redeclare
//c = 8
//console.log(c)   //error Assignment to constant variable
const obj = { country : 'schweiz'}
obj.country= 'belarus'
console.log(obj.country)   //ok
///////////////////////////////////////////////////////////
// i = underfined
for (var i = 0; i < 10; i++){
    setTimeout(() => {
        console.log(i)
    }, 1000)
}               // 10 10 10 10 10 10 10 10 10 10 10
// Why this happens
// var is function-scoped, not block-scoped.
// There is only one i, shared by all iterations.
// The for loop finishes before any setTimeout callback runs.
// By the time the callbacks execute, the loop has completed and i === 10.
// how to fix it
for (var i = 0; i < 10; i++){
    setTimeout((j) => {
        console.log(j)
    }, 1000, i)
} 

for (var i = 0; i < 10; i++){
    // immediately invoked function expression
    // (function() {})()
    (function(j) {
         setTimeout(() => {
        console.log(j)
    }, 1000)
    })(i)
}

for (let i = 0; i < 10; i++){
    console.log(i)
    setTimeout(() => {
        console.log(i)
    }, 1000)
} 

////////////////////////////////////////////////////////////// 

console.log('hello world')

// const nameCity 
// nameCity = 'Zurich'
// console.log(nameCity)    // doesnt work this way. const variables must be initialized during declaration
let kantonName 
kantonName = 'Aargau'
console.log(kantonName)

//data types
let firstName = 'John'         //string
let ageOfrother = 25           // number
let isHeMarried = false        // boolean
let yearsInMarriage = null     // null         means no value for this particular variable
let numerOfCars = undefined    //undefined


// concatination
let price = 80
let productName = 'cup'
//concatination                         typical for old programmig languages
let messageToPrint1 = 'The price for your ' + productName + ' is ' + price + ' dollars'
console.log(messageToPrint1)
// interpolation   with a back tick     typical for JS
let messageToPrint2 = `The price for your ${productName} is ${price} dollars`
console.log(messageToPrint2)

// objects and arrays
// objects can hold multiple values
// key value pairs
let customer = {
    firstName: 'John',
    lastName: 'Johns',
    cars: ['bmw', 'tesla', 'mers']
}
console.log(customer.firstName)     // dot notation
console.log(customer['lastName'])   // bracket notation 
//reassign a new value
customer.firstName = 'Bob'    
console.log(customer.firstName)
customer['lastName'] = 'Petrov'
console.log(customer['lastName'])
console.log(`${customer.firstName} ${customer.lastName}`)
console.log(customer.cars[0])
// arrays
let arr = [1,2,3,4,5]
arr[0] = 99
console.log(arr)

// comparison (relational) operators
// > more than
// < less than
// >= more than equal
// <= less than equal
let result = 10 > 5
console.log(result)
// however when compare strings ASCII codes will be compared
console.log('kaka' < 'haha')
// if compare different data types they try to convert to number first
console.log('8' > 5 )
console.log('f' > 5254568 )   // cant convert 'f' into number

// *************************equalit comparison
let a = 1
console.log(a == '1')    // lose comparison
console.log(a === '1')   // strict comparison
//when comparing different data types also will try to convert to number
console.log('5' == 5)
//when compare strings ASCII codes will be compared
console.log('5' == '5')
console.log('5' === '5')

//****************************** */ logical operators
// logical 'and'  &&
let ageIsMoreThemEighteen = true
let isUSCitizen = false
let eligibilityForDrivinLicense = ageIsMoreThemEighteen && isUSCitizen
console.log('Customer is eligible for DL: ' + eligibilityForDrivinLicense)
// logical 'or'   ||
let ageIsMoreThemEighteen1 = true
let isUSCitizen1 = false
let eligibilityForDrivinLicense1 = ageIsMoreThemEighteen || isUSCitizen
console.log('Customer is eligible for DL: ' + eligibilityForDrivinLicense1)
// logical 'not'   !
console.log(!true)
console.log(7 !== 10)

// conditional statement
// if else

//loop
// i = i+1  is equal i++
for(let i=0; i <5; i++){
    console.log('Hoi ' + i)
}
// for of loop        ES5 syntax
let cars = ['Volvo', 'BMW', 'Tesla']
for (let car of cars){                // car is iterator
    console.log(car)
    if (car == 'BMW'){
        break                    // stop the loop
    }
}
// for each           ES6 syntax     looping thru array          it is the same as let car of cars
cars.forEach(car =>{
    console.log(car)
})


// functions
// declarative function   hoisted
function printOne(){
    console.log('One')
}
printOne()
// anonymus function    not hoisted
//printTwo()            // does not work this way. must be initialized first
let printTwo = function(){
    console.log('Two')
}
printTwo()
// arrow function
let printThree = ()=> {
    console.log('Three')
}
printThree()
// function with arguments
function printName(name, job){
    console.log(name + ' ' + job)
}
printName('Remo', 'Manager')

// function with return
function multiplyByNumber(num1, num2){             //num1, num2  papameters 
    let result = num1 * num2
    return result
}
let myResult = multiplyByNumber(2,7)               // 2,7 arguments
console.log(myResult)

// import function
// import particular function   {}
import {printAge} from '../helpers/printHelper.js'
//printAge(28)       // will throw an error 'Cannot use import statement outside a module'   we need to add "type": "module"  in package.json file
printAge(28)
// import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(47)


// class and methods
// first way
import { CustomerDetails } from '../helpers/printHelper.js'
let dataCustomer = new CustomerDetails()    // this is a consctructor or instance of the class
//dataCustomer.printFirstName('Tatiana')
//dataCustomer.printLastName('Burykina')

// second way
import { invoice } from '../helpers/printHelper.js'   // we removed a consctructor/instance of the class from the body where we call methods and keep it in class file
//invoice.printTheFirstInvoice(500)
//invoice.printTheLastInvoice(100)

// *******************************************************operators
// unary are used with one value
// + to convers into number
let f = '5'
console.log(typeof +f)
console.log(+true)
console.log(+false)
// - to make negative number
let j = 88
console.log(-j)
console.log(j)
//  ++ incremet is used only with variables
// ++variable  prefix it changes the value!!!!!!!!!!!!!!!!!
let vari = 99
console.log(++vari)
console.log(vari)  
//variable++ postfix
let post = 44
console.log(post++)
console.log(post)

// -- decrement
let dec = 55
console.log(--dec)
console.log(dec)

// -- decrement
let decr = 77
console.log(decr--)
console.log(decr)

// binary are used with two values
// =   +    -    *     /   **    
//  % - reminder
//console.log(10 % 100)  // if left number is less than right one it prints left number

// + string + number
console.log(typeof ('8' + 1))  // string 81

// the rest of binary operators will try to convert into number
console.log('8'/2)   //type of number

// how to chnage the value of a variable
let gagahaha = 5
gagahaha=gagahaha+5
console.log(gagahaha)
console.log(gagahaha += 5)