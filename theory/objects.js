import _ from 'lodash'

// ****************************create an object
const object1 = {a:1, b:2}   // using object literal
const object2 = new Object()   // Using new Object()
object2.name = 'Tania'
object2.city = 'zurich'

console.log(object2)

//****************************copy an object  - shallow copy
// //We can use the spread operator to copy an object
const person = {
    name: 'Michael',
    age: 25,
    job: 'QA Engineer',
    introduceSelf() {
        console.log(`Hi! My name is ${this.name}`)
    },
    declareAge() {
        console.log(`I am ${this.age} years old`)
    }
}
const personCopy = {...person} 
//console.log(personCopy)
personCopy.country = 'Ukraine'
console.log(personCopy)
console.log(person)

//console.log(person === personCopy) // false, because they are different objects

// //We can use Object.assign to copy an object
const personCopy2 = Object.assign({}, person)
//console.log(personCopy2) 
personCopy2.city = 'Kyiv'
//console.log(personCopy2) 
//console.log(person)   

// shallow copy
const newobject = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
}

const newObjectCopy = {...newobject} // shallow copy
newObjectCopy.address.city = 'Los Angeles' // this will change the city in the original object as well
//console.log(newobject)
newobject.address.country = 'Canada' // this will change the country in the original object as well
//console.log(newObjectCopy) // the country will be changed in the copy as well
console.log(newobject)

//*******************************************copy an object  - deep copy
const objectCity = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
}
//JSON.stringify method converts a JavaScript value to a JSON string
// JSON.parse(JSON.stringify())  not reccomended as it is heavy
const objectCityString = JSON.stringify(objectCity) // convert the object to a string
//console.log(typeof objectCityString) // this is a string now
const objectCityCopy2 = JSON.parse(objectCityString) // convert the string back to an object

//console.log(objectCityCopy2)
objectCity.address.city = 'Los Angeles' // this will not change the city in the copy
//console.log(objectCityCopy2.address)

//using structuredClone() method
const objectCountry = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
}
const objectCountryCopy = structuredClone(objectCountry) // deep copy
//console.log(objectCountryCopy)
//console.log(objectCountry)
objectCountryCopy.address.city = 'chicago' // this will not change the city in the original object
//console.log(objectCountry.address.city) // the original object is not changed

// we can also use lodash.cloneDeep
// but we need lodash library for that

//*******************************************************************how to avoid object change
const cantChange = {}
//now we define objects properties  nomally we would define like this cantChange[country]='belarus'
Object.defineProperty(cantChange, 'country', {
    value: 'Schweiz', 
    writable: false,     // can field be changed?
    enumerable: true,   // can it be looped thru? for..in or object keys
    configurable: false   //can we delete field?, change its type value?, also can we change other description values writable & enumerable?
})
console.log(cantChange.country)
//cantChange.country='Belarus'
//console.log(cantChange.country)  // error

//*******************************************************************prevent object extention
const numberOfHouses = {
    zurich: 1,
    zug: 2
}
// Object.preventExtensions allows us to change values of the fields or delete them but does not allow to add new properties
Object.preventExtensions(numberOfHouses)
//numberOfHouses.Luzern = 4
//console.log(numberOfHouses) // error Cannot add property Luzern, object is not extensible
// however we can change values
numberOfHouses.zug = 8
delete numberOfHouses.zurich
console.log(numberOfHouses)

// Object.seal we cant delete property, cant add a new one , but can change existing one
Object.seal(numberOfHouses)
numberOfHouses.zug = 10
console.log(numberOfHouses)
//delete numberOfHouses.zug    error 
//numberOfHouses.bremgarten = 4 error
console.log(numberOfHouses)

// Object.freeze cant change property value, cant delete/add property   most strict
Object.freeze(numberOfHouses)
//numberOfHouses.zug = 1  error
//numberOfHouses.chur = 2 error
//delete numberOfHouses.zug error



// ******************************************************************examples

function namesMoreThan18(arr) {
    return arr.filter(obj => obj.age > 18).map(el => el.name)

}

const arrObj = [
    {
        name : 'Ivan',
        age: 25
    },
    {
        name : 'Vera',
        age: 15
    },
    {
        name : 'Gaga',
        age: 58
    },
    {
        name : 'Miro',
        age: 14
    }
]
//console.log(namesMoreThan18(arrObj))


function groupby(arr, action) {
    let obj = {}
    if (typeof action === 'string') {
        
        for(let i = 0; i < arr[action]; i++){
            if (arr[i][action] in obj) {
                obj[arr[i][action]].push(arr[i])
            }
            else{
                obj[arr[i][action]] = [arr[i]]
            }
        }
    }
    else {
        arr.forEach(element => {
            if(action(element) in obj){
               obj[action(element)].push(element)
            }
            else{
                obj[action(element)] = [element]
            }
        })
    }
    return obj
}
function groupbyREVISED(arr, action) {
    if (typeof action === 'string') {
        let obj = {}
        arr.forEach(el => {
            if(!(el[action] in obj)){
                obj[el[action]]=[el]
            }
            else {
                obj[el[action]].push(el)
            }
        })
        return obj
    }
    else {
        return arr.reduce((accum, currentEl) => {
        action(currentEl) in accum ? accum[action(currentEl)].push(currentEl): accum[action(currentEl)] = [currentEl]
        // if(action(currentEl) in accum){
        //     accum[action(currentEl)].push(currentEl)
        // }
        // else{
        //     accum[action(currentEl)]= [currentEl]
        // }
        return accum
        }, {})
    }
}
const arrStrings = ['foo', 'gaga', 'gav', 'hahaha']
const arrNUmbers = [5,5.2,8,7,1.2, 1.8]
//console.log(groupby(arrStrings, 'length'))
//console.log(groupby(arrNUmbers, Math.floor))
//console.log(groupbyREVISED(arrStrings, 'length'))
//console.log(groupbyREVISED(arrNUmbers, Math.floor))

const users = [
    { id: 1, name: 'Alice', age: 25, inActive: false },
    { id: 2, name: 'Bob', age: 30, inActive: true },
    { id: 3, name: 'Charlie', age: 22, inActive: false },
    { id: 4, name: 'Diana', age: 28, inActive: true },
    { id: 5, name: 'Ethan', age: 35, inActive: false }
];

function arrayNames (arr) {
    return arr.map(el => el.name)
}
//console.log(arrayNames(users))
function activeUsers (arr) {
    return arr.filter(el => el.inActive == false).map(el => el.name)
}
//console.log(activeUsers(users))

function oldToYoung(arr) {
    return arr.sort((a,b) => b.age -a.age)
}
//console.log(oldToYoung(users))
//////////////////////////////////////////////////////
const user = {
    id: 5,
    name: 'Nana',
    country: 'ch'
}

function userId (obj) {
    const {id: _id, name} = obj
    console.log(_id, name)
    //console.log(obj)
}

//userId(user)
/////////////////////////////////////////////////////
const objects = {
    kaka: 5,
    nana: 8
}
// variant 1
function keyName(obj, value) {
    for(let key in obj) {
        if(obj[key] == value) {
            return key
        }
        else {
            throw new Error ('wrong value')
        }
    }
}
//console.log(keyName(objects, 4))
// variant 2
function keyName1(obj, value) {
   return Object.keys(obj).find(key => obj[key] === value)
}
//console.log(keyName1(objects, 5))
//////////////////////////////////////////
const user5 = {
    name: 'Anna',
    age: 25,
    log: () => {
        console.log(this.name, this.age)
    }
}
//user5.log()     arrow function does not have its own this
// this is correct
const user8 = {
    name: 'Anna',
    age: 25,
    log: function() {
        console.log(this.name, this.age)
    }
}
//user8.log() 

// and this is correct
const user10 = {
    name: 'Anna',
    age: 25,
    log() {
        console.log(this.name, this.age)
    }
}
//user10.log() 
////////////////////////////////////////////
import { faker } from '@faker-js/faker'
const generateMovieWithoutId = () => {
  return {
    name: faker.lorem.words(3),
    year: faker.date.past({ years: 50 }).getFullYear(), //random year between the past 50 years
    rating: faker.number.float({ min: 1, max: 10, fractionDigits: 1 })
  }
}
 
const data = {...generateMovieWithoutId(), name: 'my name'}
console.log(data)


//************ clone object 
const country = {
    name: 'Switzerland',
    popularion: 10000000,
    languages: 3,
    address: {
        city: 'zurich',
        street: 'grutstrasse'
    }
}

// shallow copy
const shallowCopy1 = {...country}
// shallow copy
const shallowCopy2 = Object.assign({}, country)

// when we have nested object we copy only reference menaing we can chage property values 
// this chnage happens in both original obj and its shallow copies
shallowCopy1.address.city = 'Zug'
console.log(country.address.city)
console.log(shallowCopy2.address.city)

// deep copy

// JSON.parse(JSON.stringify(country))  fiest we convert our object into json string, then string back into object
// not reccomended as it is heavy
const deepCopy1 = JSON.parse(JSON.stringify(country))
// use structuredClone() instead
const deepCopy2 = structuredClone(country)
// or using Lodash
const deepCopy3 = _.cloneDeep(country)

deepCopy3.address.city = 'Chur'
console.log(country.address.city)
// or with recurse function

function deepCopy(value) {
    // in case we receive number or string, or null (they all are primitive) we simply return value
    if(typeof value !== 'object' || value === null) {
        return value
    }
}
console.log(deepCopy(null))
