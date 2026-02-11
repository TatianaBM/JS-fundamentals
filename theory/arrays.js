let arr = [1,5,'hh']
console.log(typeof arr)
// check whether array if an array
console.log(Array.isArray(arr))

//*********************************************create an array */
let createArr1 = []    // using array literal
let createArr2 = new Array('a','b','c')  //Using the Array Constructor

console.log(createArr2)
//*********************************************copy arrays */
let array1 = [1,2,3,4,5,{a: 'haha', b: 'gaga'}]

// option 1 // Create a copy using spread syntax.
let copyOfArray1 = [...array1]
console.log(copyOfArray1)

// option 2 using from() method
let anotherCopy = Array.from(array1)
console.log(anotherCopy)

// option 3 using slice() method
let copy3 = array1.slice()
console.log(copy3)

//!!!!!!!!!!!!!!!!! all above create shallow copies.!!!!!!!!!!!!!!

array1[5].a = 'changed'
console.log(array1)
console.log(copy3)
console.log(anotherCopy)
console.log(copyOfArray1)

//If you instead want a deep copy of an array, you can use JSON.stringify() to convert the array to a JSON string, 
// and then JSON.parse() to convert the string back into a new array that's completely independent from the original array.
let arrayNew = [1,2,3,4,5,{a: 'tata', b: 'fafa'}]
let jsonString = JSON.stringify(arrayNew)
let deepCopy = JSON.parse(jsonString)
console.log(deepCopy)
arrayNew[5].a = 'lala'
console.log(arrayNew)
console.log(deepCopy)

//You can also create deep copies using the structuredClone() method
let deepCopy2 = structuredClone(arrayNew)
console.log(deepCopy2)

//****************************************************************Destructuring 
let des = [3, 11, 32, 7, 20] 
let a,b, rest
[a, b, ...rest] = des
console.log(rest)
const [d,e] = des
console.log(d)


//**************************************************************Array methods */

// ***********************find()
// returns the first element in the provided array that satisfies the provided testing function. If no values satisfy 
// the testing function, undefined is returned.
let list5 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' },
  { firstName: 'hh', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' }
];
function getFirstPythonImproved(list) {
  function isPython(student) {
    return student.language === 'Python'
  }
  let student = list.find(isPython)
  
//   if(student === undefined){
//     return 'There will be no Python developers'
//   } else {
//         return student.firstName + ', ' + student.country
//   }
  return student? `${student.firstName}, ${student.country}` : 'There will be no Python developers'
  //console.log(Boolean(undefined)  // false)
}
console.log(getFirstPythonImproved(list5))

// ***********************every()
//The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided 
// function. It returns a Boolean value.
let list8 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' },
  { firstName: 'hh', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' }
];
function isSameLanguage(list) {
  let languages = list.map(el => el.language) 
  let firstEl = languages[0]
  return languages.every(language => language === firstEl)
  //return list.every(el => el.language === list[0].language)
}
console.log(isSameLanguage(list8))

//******************************filter() 
//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements 
// from the given array that pass the test implemented by the provided function.
let listNew = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 18, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 49, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
function findSenior(list) {
  let maxAge = Math.max(...list.map(el => el.age))
  return list.filter(el => el.age == maxAge)
}
console.log(findSenior(listNew))

//**************************************every() 
//The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. 
// It returns a Boolean value.
//*************************************includes()
//The includes() method of Array instances determines whether an array includes a certain value among its entries, 
// returning true or false as appropriate.
let list10 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
function allContinents(list) {
  let actualContinents = list.map(el => el.continent)
  let continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  return continents.every(continent => actualContinents.includes(continent) )
}
console.log(allContinents(list10))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /*
// Удалить дубликаты
//   - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
//   - Напишите скрипт, который убирает из массива дубликаты
//   - При удалении дубликата, длина массива должна уменьшаться

//   Присвойте результат в переменную "unique"
// */
// Задачу сделать без использования set

function unique (arr) {
  return arr.filter((el, _, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
}
console.log(unique([1,1,2,4,5,4,4]))

function removeDublicates (arr) {
  
  let unique = []
  arr.forEach((el, idx, arr) => {
    if (arr.indexOf(el) !== arr.lastIndexOf(el)) {
      arr.splice(idx, 1)
    }
  })
  unique = [...arr]
  return unique
}
console.log(removeDublicates([1,1,2,4,5,4,4]))

let unique = [];
const array = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];

for (let val of array) {
  if (array.indexOf(val) !== array.lastIndexOf(val)) {
    let indexForDeletion = array.lastIndexOf(val);
    array.splice(indexForDeletion, 1);
  }
}
unique = array;
console.log(unique);
/////////////////////////////////
let arr8 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
]
function getAverageAge(list) {
  let ageArr = list.map(el => el.age)
  let average = ageArr.reduce((acum, el) => acum + el, 0) / ageArr.length
  return Math.round(average)
}

function getAverageAge1(list) {
  return Math.round(list.reduce((sum,obj) => sum + obj.age, 0) / list.length);
}

console.log(getAverageAge(arr8))
/////////////////////////
let list88 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
]
function isLanguageDiverse(list) {
  let countObj = {}
  for (let developer of list){
    if(developer.language in countObj) {
      countObj[developer.language] +=1
    } else {
      countObj[developer.language] = 1
    }
  }
  return countObj
}
console.log(isLanguageDiverse(list88))
//////////////////////////////
let listNames = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]
function findOddNames(list) {
 let result = list.filter(developer => {
    let sum = 0
    for (let i = 0; i < developer.firstName.length; i++) {
      sum += developer.firstName.charCodeAt(i)
    }
    if(sum % 2 !== 0) {
      return developer
    }
  })
  return result
}

function findOddNames(list) {
   return list.filter( (d) => {
     return d.firstName.split('').reduce(((r, e) => r + e.charCodeAt(0)), 0) % 2 !== 0
   });
}

console.log(findOddNames(listNames))
/////////////////////////////////////////////////
// //1. Цикл for..of в массиве
//   - Создайте массив [1,2,3,4,5,6,7,8,9,10]
//   - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
//     если элемент четный - возведет его в квадрат
//     если элемент нечетный - возведет его в 3ю степень

//   Значение добавьте в массив 'forOf' 

let array2 = [1,2,3,4,5,6,7,8,9,10]
let forOf = []
for (let el of array2) {
  if(el % 2 == 0) {
    forOf.push(el**2)
  } else {
    forOf.push(el**3)
  }
}
console.log(forOf)

//////
// 2. Методы массивов
//   - Создайте массив [1,2,3,4,5]
//   - Добавьте в конец массива число 6 соответствующим методом
//   - Добавьте в начало массива число 0 соответствующим методом
//   - Удалите элемент с индексом 2 из массива соответствующим методом
//   - Удалите последний элемент из массива соответствующим методом

//   В результате вы должны получить массив [0, 1, 3, 4, 5], присвойте в переменную "result"

let arra = [1,2,3,4,5]
arra.push(6)
arra.unshift(0)
arra.splice(2,1)
arra.pop()
let result = [...arra]
console.log(arra)

////////////////
// 4. Конкатенация массивов
//   - Создайте массив с числами [1,2,3,4,5]
//   - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
//   - Используйте спред оператор
//   Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
const array11 = [1,2,3,4,5]
const array22 = [6, 7, 8, 9, 10]
const mergedArray = [...array11,...array22]
console.log(mergedArray)

/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

function pizzaCheck (competPizza, myPizza) {
  const resultUnique = []
  let resultNull 
  for(let i = 0; i < myPizza.length; i++) {
    if(competPizza.some(el => el.toLowerCase() === myPizza[i].toLowerCase())) {
      resultNull = null
    } else {
      resultUnique.push(myPizza[i].toLowerCase())
    }
  }
  if(resultUnique.length > 0) {
    return resultUnique
  } else {
    return resultNull
  }
}
console.log(pizzaCheck(competitorPizzas, myPizzasT1))
console.log(Boolean(0))

let num = [1,2,3]
console.log(Math.min(...num))


console.log(-Math.abs(12525220.3325))

