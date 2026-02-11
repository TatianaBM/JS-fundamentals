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



