// ternary 
//The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a 
// question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression 
// to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

function isMember(boolean) {
    return boolean? 'yes true she is a member' : 'no false she is not a member'
}
console.log(isMember(true))
console.log(isMember(false))