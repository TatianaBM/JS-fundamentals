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