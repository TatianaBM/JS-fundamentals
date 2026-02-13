// string methods













// examples
let string = 'haZa'
function solution(string) {
    let arr = []
    let array = string.split('')
    for (let i = 0; i < array.length; i++){
        if(array[i].charCodeAt() >= 65 && array[i].charCodeAt() <=90){
            //array.splice(i, 0, ' ')
            arr.push(' ')
            arr.push(array[i])
        } else {
            arr.push(array[i])
        }
    }
    return arr.join('')
}
console.log(solution(string))

// calculate vowels
function calculateVowels(str) {
    let count = 0
    let vowels  = ['a','e','u','i','o']
    for(const char of str.toLowerCase()) {
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}
console.log(calculateVowels('kAika'))

const calcVowels = (str) => {
    let vowels  = ['a','e','u','i','o']
    return str.toLowerCase().split('').reduce((acc, el) => vowels.includes(el) ? acc + 1 : acc, 0)
}
console.log(calcVowels('kuAika'))

// reverse strings
// 'welcome to the world of javascript'
function reverse(str) {
    return str.split(' ').map(el => el.split('').reverse().join(''))
}
console.log(reverse('welcome to the world of javascript'))