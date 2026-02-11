let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/
console.log(emailPattern.test('example-Valid-5@gmail.com'))   // true
console.log(emailPattern.test('invalid.@.com'))   // false

console.log(typeof emailPattern)