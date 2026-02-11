// Убывающий порядок Ваша задача — создать функцию, которая принимает в качестве аргумента любое неотрицательное целое число 
// и возвращает его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.
function max (n) {
    return Number(n.toString().split('').sort((a,b) => b-a).join(''))
}
console.log(max(256))

// function descendingOrder(num) {
//     return +([...String(num)].sort((a,b) => b - a).join(''))
// }
// console.log(descendingOrder(42145)); // 54421
//************************************************************************************************** 

// Перед вами объект, ваша задача получить из него поля name и age самым быстрым 
// и удобным способом
const user = {
    name: 'Ann',
    age: 18,
    isProgrammer: true,
}
const {name, age} = user

// Частота символов Напишите функцию, которая принимает строку и возвращает объект, 
// где ключами будут символы строки, а значениями — их количество в строке.


function charFrequency(str) {
    return [...str].reduce((acc, el) => {
        if(el in acc) {
            acc[el]++ 
        } else {
            acc[el] = 1
        }
        return acc
    }, {})
}

console.log(charFrequency("abbccc")); // { a: 1, b: 2, c: 3 }