// each object in js has a an invisible reference to onother object, which is a prototype. [[prototype]] is a objject,
// from which our object inherits methods and features 




// Object-oriented programming (OOP) three main concepts: classes and instances, inheritance, and encapsulation
// Object-oriented programming is about modeling a system as a collection of objects, where each object represents
// some particular aspect of the system.
// Objects contain both functions (or methods) and data

//***************oop principles

//************encapsulation - getter setter to access private fields

//************inheritance -  for clean code no dublicates, maintenance and hierarchy. We inherit when we need to extend functionality

//************polomorphism  - when parent method can be differ from the child method. see example below
class Car {
  constructor(model) {
    this.model = model;
  }
  drive(speed) {
    console.log(`${this.model} drives at ${speed} km/h`);
  }
}
class BMW extends Car {
  drive(speed) {
    super.drive(speed); // Вызов метода родителя
    console.log(`Oil check required for ${this.model}`);
  }
}
const m3 = new BMW('M3');
m3.drive(120);

//************abstraction - below see an example in typescript
// abstract class Animal {
//   abstract makeSound(): void; // абстрактный метод
//   move(): void {
//     console.log("I am moving");
//   }
// }

// class Dog extends Animal {
//   makeSound(): void {
//     console.log("Woof!");
//   }
// }
// const myDog = new Dog();
// myDog.makeSound(); // "Woof!"
// myDog.move();      // "I am moving"

// ************composition - below see an example
// Отдельные функциональные объекты : when we do not want to use all the methods from the parent
class Engine {
  start() { console.log("Engine started"); }
}

class Radio {
  playMusic() { console.log("Playing music"); }
}

// Класс Car собирает эти объекты
class Car {
  constructor(engine, radio) {
   this.engine =  engine
   this.radio = radio
  }

  drive() {
    this.engine.start();
    console.log("Car is driving");
  }

  playMusic() {
    this.radio.playMusic();
  }
}
//Использование
const myCar = new Car(new Engine(), new Radio());
myCar.drive();       // Engine started \n Car is driving
myCar.playMusic();   // Playing music


// class -----------------------------------------------------------------------------------------------------------------------
//Classes are a template for creating objects. 
//we create abstract definitions representing the types of objects we want to have in our system - these are classes
// class has data properties and methods
//On its own, a class doesn't do anything: it's a kind of template for creating concrete objects of that type

//**************************You can declare a class using the class keyword

// ***************************************Declaration
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduceSelf() {
        console.log(`HI! My name is ${this.name}`)
    }

    declareAge() {
        console.log(`I am ${this.age} years old`)
    }
}

//now we create a new instance of the class Person
//Programming languages often use the keyword NEW to signal that a constructor is being called.
const michael = new Person('Michael', 25)
michael.introduceSelf()
michael.declareAge()
//This declares a class called Person, with:
// name property
// constructor that takes a name parameter that is used to initialize the new object's name property
// introduceSelf() method refers to the object's properties using 'this'

// class with default values
class Job {
    field = 'IT'
    experience = 5
    jobTitle = 'QA Engineer'

    getTitle() {
        return `I am a ${this.jobTitle}`
    }
}

const person1 = new Job()
console.log(person1.getTitle())
// ***************constructor.name - экземпляр класса хранит своё имя в свойстве constructor.name
console.log(person1.constructor.name)

//Classes are in fact "special functions", and just as you can define function expressions and function declarations, 
// a class can be defined in two ways: a class expression or a class declaration.

// Expression; the class is anonymous but assigned to a variable
const table = class {
    constructor(color, material) {
        this.color = color
        this.material = material
    }

    getTableDetails() {
        return `this is a ${this.color} table from ${this.material}`
    }
}
let table5 = new table('red', 'wood')
console.log(table5.getTableDetails())

// Expression; the class has its own name
const table1 = class Table1{
    constructor(color, material) {
        this.color = color
        this.material = material
    }

    getTableDetails() {
        return `this is a ${this.color} table from ${this.material}`
    }
}
let table10 = new table1('white', 'wood')
console.log(table10.getTableDetails())
console.log(table10.color)

//*************************************Inheritance
//We use the extends keyword to say that this class inherits from another class
//when a method has the same name but a different implementation in different classes - is called polymorphism

class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduceSelf() {
        console.log(`HI! My name is ${this.name}`)
    }

    declareAge() {
        console.log(`I am ${this.age} years old`)
    }
}
class QAManual extends Persons {
    constructor(name, age) {
        super(name,age)
        this.type = 'manual'
    }
    isManual() {
        console.log(`Yes I am a ${this.type} QA engineer`)
    }
}
const qaManual = new QAManual('Lev', 40)
qaManual.isManual()
qaManual.introduceSelf()
qaManual.declareAge()

class QAAutomation extends Persons {
    isAutomation() {
        console.log(`Yes I am a QA automation engineer`)
    }
}

const qaEngineer = new QAAutomation()
qaEngineer.isAutomation()

//---------------Static properties cannot be directly accessed on instances of the class. 
// --------------Instead, they're accessed on the class itself.
// --------------------------static method when we do not create instances
class Calculator {
    static sum (val1, val2) {
        return val1 + val2
    }
}
console.log(Calculator.sum(5,2))

// ****************************getter & setter
//getter and setter - to get access to private fields

//private fields cant be inherited 
class Employees {
    #salary;

    constructor(firstName, lastName, profession, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.salary = salary
    }

    // get value after validation
    get salary() {
        return this.#salary
    }

    // validate value
    set salary(value) {
        if(value !== 'number' && value <= 0) {
            throw new Error('Salary has to be more than zero')
        }
        this.#salary = value
    }
    
    get firstName() {
        return this._firstName
    }
    set firstName(str) {
        if(typeof str !== 'string' || str.length > 10) {
            throw new Error (' Your name should be a short string');
        }
        this._firstName = str
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`) 
    }
}

let employee1 = new Employees('Vera', 'May', 'Engineer', 5000)
//employee1.getFullName()
// private property
employee1.salary = 5500
//console.log(employee1.salary)
let employee22 = new Employees('12345gggggggggggggggggggg', 'HOi', 'Engineer', 2000)
console.log(employee22.firstName)

class QA extends Employees {
    constructor(firstName, lastName, profession, salary, experience) {
        super (firstName, lastName, profession, salary)
        this.experience = experience
    }

    #howLong() {
        return `working as QA for ${this.experience} years`
    }

    workingWell () {
        return this.#howLong()
    }

    likeIt() {
        return 'QA engineer enjoes his job'
    }

}

const qaEngineer1 = new QA('Vera', 'May', 'Engineer', 5000, 5)
console.log(qaEngineer1.workingWell())
console.log(qaEngineer1.likeIt())

// *********************************instanse of
console.log(qaEngineer1 instanceof Employees)
console.log(qaEngineer1 instanceof QA)

//*************private fields are a way to define properties of a class that cannot be accessed directly from outside the class body. 
// They are prefixed with a # symbol. true encapsulation: only code inside the class can access them.

// ********************getters and setters in JavaScript classes. Why use them: 
//1. Encapsulation: hide the internal representation of data.
//2. Validation: check values before assigning.
//3. Computed values: generate values on the fly instead of storing them.
// A getter must return something.
//A setter takes exactly one parameter.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height; // computed dynamically
  }
}

const r = new Rectangle(5, 10);
console.log(r.area); // 50

//If the value feels like a property of the object (like "area" is to a rectangle), a getter is more natural.
//Getter: Pretends the value is stored in the object, even though it’s computed.

//Method: Explicitly says "do a calculation."
class Rectangles {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height; // computed dynamically
  }
}

//const re = new Rectangles(5, 10);
//console.log(re.area()); // 50



///////////////////////////////////////////////////////examples

//1. Создайте класс Employee +
//2. Реализуйте геттеры и сеттеры для всех полей, включая приватное поле salary
//3. Реализуйте метод getFullName() — возвращающий полное имя сотрудника +
//4. Проверьте корректную работу класса, создав несколько экземпляров и протестировав геттеры и сеттеры 

class Employee {
    #salary
    constructor(firstName, lastName, profession, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.#salary = salary;
    }
    get firstName() {
        return this._firstName
    }
    set firstName(value) {
        if(typeof value !== 'string') {
            throw new Error('First name must be a string')
        }
        this._firstName = value
    }
    get lastName() {
        return this._lastName
    }
    set lastName(value) {
        if(typeof value !== 'string') {
            throw new Error('Last name must be a string')
        }
        this._lastName = value
    }
    get profession() {
        return this._profession
    }
    set profession(value) {
        if(typeof value !== 'string') {
            throw new Error('Profession must be a string')
        }
        this._profession = value
    }
    get salary() {
        return this.#salary
    }
    set salary(value) {
        if(typeof value !== 'number') {
            throw new Error('Salary must be a number')
        }
        this.#salary = value
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

//const employee1 = new Employee('Ivan', 'Jones', 'QA Engineer', 5000 )
//console.log(employee1.getFullName())
//console.log(employee1.#salary)
// employee1.salary = 5500
// console.log(employee1.salary)

//const employee2 = new Employee(15, 'Jones', 'QA Engineer', 2000 )
//console.log(employee2.firstName)
//console.log(employee2.getFullName())

//const employee3 = new Employee('John', ['h','b'], 'QA Engineer', 2000 )
//console.log(employee3.lastName)
//console.log(employee3.getFullName())

// const employee4 = new Employee('John', 'White', null, 2000 )
// console.log(employee4.lastName)
// console.log(employee4.getFullName())

//const employee5 = new Employee('John', 'White', 'QA automation engineer', 'a lot' )
//console.log(employee5.salary)
// console.log(employee5.getFullName())


//Создайте класс Company
//Реализуйте геттеры для полей title, phone, и address.
// Добавьте методы:
//- addEmployee(employee) — добавляет сотрудника в массив employees с проверкой, что переданный объект является экземпляром класса 
// Employee. (instanceOf)
//- getEmployees() - возвращает массив всех сотрудников.
// Добавьте в класс Company метод getInfo(), который возвращает строку с информацией о компании вида (перенос строки сделать с \n):

class Company {
    #employees
    constructor(title, phone, address) {
        this.title = title
        this.phone = phone
        this.address = address
        this.#employees = []
    }
    get jobTitle() {
        return this.title
    }
    get phoneNumber() {
        return this.phone
    }
    get fullAddress() {
        return this.address
    }
    addEmployee(employee) {
        if(employee instanceof Employee) {
            this.#employees.push(employee)
        } else {
            throw new Error('Employee is not instance of Employee')
        }
    }
    getEmployees() {
        return this.#employees
    }
    getInfo() {
        return `Company: ${this.title}\nAddress: ${this.address}\nTotal Employees: ${this.#employees.length}`
    }
}
const comp = new Company('abc', 12456, 'strasse 147')
console.log(comp.title)
console.log(comp.jobTitle)

const employee6 = new Employee('John', 'White', 'QA automation engineer', 10000 )
const employee7 = new Employee('Alex', 'Red', 'Software engineer', 8000 )
const company = new Company('ABC', 12345, 'Whitestrasse 15')
company.addEmployee(employee6)
company.addEmployee(employee7)
console.log(company.phoneNumber)
console.log(company.phone)
console.log(company.getEmployees())
console.log(company.address)
company.getInfo()

// modify employee
