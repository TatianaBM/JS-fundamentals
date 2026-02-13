// closure is a function that remembers variables from its surrounding (outer scope)

function makeCounter() {
    let count = 0
    return function() {
        return count++
    }
}

let counter = makeCounter()
let anotherCounter = makeCounter()

console.log(counter())  // 0
console.log(counter())  // 1
console.log(counter())  // 2
console.log(counter())  // 3

console.log(anotherCounter())  // 0
console.log(anotherCounter())  // 1

// create a function that stores a secrete word inside which cant be changed or accessed from outside
function secret() {
    const secret = 'secrettttt'
    return function(){
        return secret
    }
}
let a = secret()
console.log(a())