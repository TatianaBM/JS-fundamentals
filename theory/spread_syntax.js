// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments 
// (for function calls) or elements (for array literals) are expected.

//*****************Spread syntax can be used when all elements from an object or array need to be included in a new array or object,
//  or should be applied one-by-one in a function call's arguments list. 
// There are three distinct places that accept the spread syntax: 
// 1. Function arguments list (myFunction(a, ...iterableObj, b))
// 2. Array literals ([1, ...iterableObj, '4', 'five', 6])
// 3. Object literals ({ ...obj, key: 'value' })

//********************Spread in array literals */

// Spread syntax "expands" an array into its elements,
const arr3 = [1,5,8]
console.log(...arr3)


const arr4 = [1, ...arr3, '4', 'five', 6]
console.log(arr4)

// arrays can be spread into objects.
const array = ['a', 'b','c']
const object = {...array}
console.log(object)

// concatenate arrays
let arr1 = ['a', 'b','c']
let arr2 = [1,2,3]
//arr1 = arr1.concat(arr2)
arr1= [...arr1,...arr2]     //instead of concat we use spread operator
console.log(arr1)


//*******************Spread in object literals */
// In an object literal, the spread syntax enumerates the properties of an object 
// and adds the key-value pairs to the object being created.
const obj1 = {a: 2, b: 3, c: 'Dave'}
const obj2 = {...obj1}
console.log(obj2)

const obj3 = { foo: "bar", x: 42 };
const obj4 = { bar: "baz", y: 13 };
const mergedObj = { ...obj3, ...obj4 };
console.log(mergedObj)

// Overriding properties
const mergedObj1 = { x: 41, ...obj3, ...obj4, y: 9 }
console.log(mergedObj1)

// Conditionally adding properties to an object
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
console.log(fruits)

// Because primitives can be spread into objects as well, and from the observation that all falsy values 
// do not have enumerable properties, you can simply use a logical AND operator:
const isSummer1 = false;
const fruits1 = {
  apple: 10,
  banana: 5,
  ...(isSummer1 && { watermelon: 30 }),
};
console.log(fruits1)

// exeption!!!!!!
const obj = { key1: "value1" };
//const array = [...obj]; // TypeError: obj is not iterable

//********************Spread in function calls
function sum(a,b,c) {
    return a + b + c
}
console.log(sum(...arr3))


function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
