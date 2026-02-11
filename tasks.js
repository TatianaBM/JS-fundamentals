function countDevelopers(list) {
  let europeDevJS  = list.filter(el => el.language === 'JavaScript' && el.continent === 'Europe')
  return europeDevJS.length
}
let listG = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]

//console.log(countDevelopers(listG))

let list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
]
function addUsername(list) {
  const date = new Date()
  let year 
  let newarr = []
  list.forEach(el => {
    let year = date.getFullYear()
    el.username = el.firstName.toLowerCase() + el.lastName[0].toLowerCase() + (year - el.age)
    newarr.push(el)
  });
  return newarr
}
//console.log(addUsername(list1))

function unique(arr) {
    return arr.filter((el, _, arr)  => arr.lastIndexOf(el) === arr.indexOf(el))
}
const array = [4,5,55,8,7,7,1,2,55]
//console.log(unique(array))

function getIntersections(arr1, arr2) {
    let newArr = []

    arr1.forEach(element => {
        if(arr2.includes(element)){
            newArr.push(element)
        }
    });

    return newArr
}
const arr1 = [1,8,6,4,5,2]
const arr2 = [5,5,8,4,1,8]
//console.log(getIntersections(arr1,arr2))

let newArr = ['haha', 'fafa', 'kaka']
const newObj = {...newArr}
console.log(newObj)
//********************************************************* */
console.log( NaN || 2 || undefined );   // 


console.log( NaN && 2 && undefined );  //1 false nan


console.log( 1 && 2 && 3 ); //3


console.log( !1 && 2 ||  !3 ); // !3


console.log( 25 || null && !3 ); //25


console.log( NaN || null || !3 || undefined);  // 


console.log( NaN || null && !3 && undefined || 5); //5

console.log( 5 === 5 && 3 > 1 || 5); // true

console.log(0 || '' || 2 || undefined || true || false)  //2

console.log(null || 2 && 3 || 4)  //3
//****************************************

let a = 5
console.log(typeof String(a))
console.log(typeof(a + ''))
let b = 0
// console.log(typeof +b)
// console.log(Number(b))
// console.log(typeof(b / 1))
//console.log(typeof(parseInt(b, 10)))
//console.log(typeof(Boolean(b)))
console.log((!!b))
//******************************* */
//functions

//1


//2
// Your task is to return an array where each object will have a new property 'greeting' with the following string 
// value:
// Hi < firstName here >, what do you like the most about < language here >?
function greetDevelopers(list) {
  return list.map(developer => {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
   return developer})
}
var list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
//console.log(greetDevelopers(list2));

let list15 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 77, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
function isAgeDiverse(list) {
  let ageGroupObj = {
    'teens': 0,
    'twenties': 0,
    'thirties': 0,
    'forties': 0,
    'fifties': 0,
    'sixties': 0,
    'seventies': 0,
    'eighties': 0,
    'nineties': 0,
    'centenarian': 0
  }
  list.forEach(developer => {
    if(0 < developer.age && developer.age <= 19) ageGroupObj.teens++
    else if(20 <= developer.age && developer.age <= 29) ageGroupObj.twenties++
    else if(30 <= developer.age && developer.age <= 39) ageGroupObj.thirties++
    else if(40 <= developer.age && developer.age <= 49) ageGroupObj.forties++
    else if(50 <= developer.age && developer.age <= 59) ageGroupObj.fifties++
    else if(60 <= developer.age && developer.age <= 69) ageGroupObj.sixties++
    else if(70 <= developer.age && developer.age <= 79) ageGroupObj.seventies++
    else if(80 <= developer.age && developer.age <= 89) ageGroupObj.eighties++
    else if(90 <= developer.age && developer.age <= 99) ageGroupObj.nineties++
    else if(100 <= developer.age) ageGroupObj.centenarian++
  })
  return Object.values(ageGroupObj).every(count => count > 0)
}
//console.log(isAgeDiverse(list15))



function addUsername5(list) {
  let currentYear = new Date().getFullYear()
  return list.map(el => { 
    el.username = el.firstName.toLowerCase()+el.lastName[0].toLowerCase() + (currentYear - el.age)
    return el
  })
  //return list
}

let list5 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
]
  
console.log(addUsername5(list5))  

// 1.
// /
//  * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
//  * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
//  * Ожидаемый результат: '10-8-6-4-2-0'
//  */

function evenNum (num1, num2) {
  let evenNumbersResult = ''
  for (let i  = num1; i >= num2; i--) {
    if ( i % 2 == 0) {
      evenNumbersResult = evenNumbersResult + `-${i}`
    }
  }
  return evenNumbersResult.slice(1)
}

console.log(evenNum(11,5))

// 2.
// /
//  * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
//  * Переменная для результата smilePatternResult уже создана и содержит пустую строку.
//  * Ожидаемый результат:
//  * :)
//  * :):)
//  * :):):)
//  * :):):):)
//  * :):):):):)
//  */

function smile (row) {
  let smilePatternResult = ''
  let addSymbol = ':)'
  for (let i = 1; i <= row; i++) {
    if(i == row) {
      smilePatternResult += addSymbol.repeat(i)
    }
    else {
      smilePatternResult += addSymbol.repeat(i) + '\n'
    }
  }
  return smilePatternResult
}
console.log(smile(6))

function smileRevised (row) {
  let smilePatternResult = ''
  let addSymbol = ':)'
  for (let i = 1; i <= row; i++) {
    smilePatternResult = smilePatternResult + addSymbol
    console.log(smilePatternResult)
  }
}
smileRevised(6)

// 3.
// /
//  * Заменить все пробелы в переменной text на "1".
//  * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
//  * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
//  */

function noSpace (str) {
  let replaceSpacesWithOneResult = ''
  for(let i = 0; i < str.length; i++){
    if(str[i] == ' '){
      replaceSpacesWithOneResult += '1'
    } else {
      replaceSpacesWithOneResult += str[i]
    }
  }
  return replaceSpacesWithOneResult
}
console.log(noSpace('Hello! I am a JS student!'))

function noSpace1 (str) {
  let replaceSpacesWithOneResult = ''
  let regex = / /g
  replaceSpacesWithOneResult = str.replace(regex, '1')
  return replaceSpacesWithOneResult
}
console.log(noSpace1('Hello! I am a JS student!'))

function noSpace2 (str) {
  let replaceSpacesWithOneResult = ''
  replaceSpacesWithOneResult = str.replaceAll(' ', 1)
  return replaceSpacesWithOneResult
}
console.log(noSpace2('Hello! I am a JS student!'))

// 4.
// /
//  * Создать строку с числами от 1 до 100.
//  * Если число делится на 3 – добавить строку "число - делится на 3".
//  * Если число делится на 5 – добавить строку "число - делится на 5".
//  * Если число делится и на 3, и на 5 – добавить строку "число - делится и на 3 и на 5".
//  * Каждая следующая строчка начинается с новой строки.
//  * Переменная fizzBuzzResult уже создана и содержит пустую строку.
//  * Ожидаемый результат (фрагмент):
//  * 1
//  * 2
//  * 3 - делится на 3
//  * 4
//  * 5 - делится на 5
//  * ...
//  * 15 - делится и на 3 и на 5
//  * ...
//  * 100 - делится на 5
//  */

function fizzBuzzResult (num) {
  let fizzBuzzResult = ''
  for (let i = 1; i <= num; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      fizzBuzzResult += i + ' - делится на 3 и на 5' + '\n'
    } 
    else if(i % 3 == 0) {
      fizzBuzzResult += i + ' - делится на 3' + '\n'
    }  
    else if(i % 5 == 0) {
      fizzBuzzResult += i + ' - делится на 5' + '\n'
    } else {
      fizzBuzzResult += i + '\n'
    }
  }
  fizzBuzzResult = fizzBuzzResult.slice(0, fizzBuzzResult.length-1)
  return fizzBuzzResult
}
console.log(fizzBuzzResult(100))

// 5.
// /**
//  * Создать строку с информацией о количестве гласных и согласных букв в слове.
//  * Переменная word уже создана и содержит строку со словом.
//  * Ожидаемый результат для hello: "hello contains 2 vowels and 3 consonants".
//  */

function quantity (str) {
  let vowels = 'aeiouy'
  let countVowels = 0
  let countConsonants = 0
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      countVowels += 1
    } else {
      countConsonants += 1
    }
  }
  return `${str} contains ${countVowels} vowels and ${countConsonants} consonants`
}

console.log(quantity('hello'))

function quantity1(str) {
  let vowels = "aeiouy";
  let countVowels = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        countVowels += 1;
      } 
    }
  }
  let countConsonants = str.length-countVowels;
  return `${str} contains ${countVowels} vowels and ${countConsonants} consonants`;
}

console.log(quantity1('helloy'))