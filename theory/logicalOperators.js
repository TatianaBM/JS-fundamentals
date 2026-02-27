//Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value. 
// However, the &&, ||, and ?? operators actually return the value of one of the specified operands, 
// so if these operators are used with non-Boolean values, they may return a non-Boolean value.

//*********************************** Logical And &&
let expr1 = 5
let expr2 = null
let expr3 = undefined
let expr4 = 8
console.log(Boolean(expr2))  // false
// Returns expr1 if it can be converted to false; otherwise, returns expr2. 
console.log(expr1 && expr2)  // null
console.log(expr3 && expr1)  //  undefined
// Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.
console.log(expr1 > expr4 && expr1 == 0)  // false 