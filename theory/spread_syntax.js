//********************Spread in array literals */

//arrays can be spread into objects.
const array = ['a', 'b','c']
const object = {...array}
console.log(object)

//concatenate arrays
let arr1 = ['a', 'b','c']
let arr2 = [1,2,3]
//arr1 = arr1.concat(arr2)
arr1= [...arr1,...arr2]     //instead of concat we use spread operator
console.log(arr1)

//*******************Spread in object literals */