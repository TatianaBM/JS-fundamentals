// *******************************pass by value
// when we assing promitive type - this is pass by value
let a = 10    // value = 10
let b = 'hi'  // value = 'hi'
let c = a     // value of c  = 10
c = c + 1     // value of c  = 11



// ********************************pass by reference
// array and objects (and anything that is not primitive)  are passed by reference thus can be modified
// inside value we store a reference to the object
let d = [1,2]  // value is stored inside of a memory address
let f = d  // here the same reference is now set. This reference is pointing to the same memory address
console.log(f === d)  // true
d.push(3)   // we are changing both d and f arrays

// now we set a new memory address for f. we are overwriting the value of f
f = [4,5,6]
console.log(d)
console.log(f)

let s = [1,2]
let k = [1,2]
console.log(s === k)   // false as they are pointing to the different memory address


let r = [1,2]    // memory address 0x01
console.log(`r = ${r}`)
add(r, 3)
console.log(`r = ${r}`)

function add(array, element) {   //we are passing memory address here 0x01, and a value 3
    array.push(element)
}
