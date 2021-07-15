const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

/* 
1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
*/
const { subjects } = students[0];

function getSubjects(arr){
    const keys = Object.keys(arr).map(a => a.slice(0,1).toUpperCase() + a.slice(1));
    return keys
}
const result = getSubjects(subjects);
document.writeln(`<p style="margin:0; padding:0"> Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл</p> <br> 
<p style="margin:0; padding:0; color:green">Результат виклику функції getSubjects() : ${result}</p>`)
/* 
2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :) 
*/
const marks = Object.values(subjects)
// .map(a => a.join());
console.log(marks);
const newArr = marks.flatMap(x => x).reduce((a,b) => a + b)
console.log(newArr);

/* const averageMark = getAverageMark(); */



















/* const userName = new Object()
userName.name = 'Jogh';
userName.age = 35;
userName.isAdmin = true;
console.log(userName);
delete userName.isAdmin
userName.name = 'Rico'
console.log(userName); */

/* console.log(userName); */
/* 
let someStr = {};
someStr['cool man'] = true; */

// alert(someStr['cool man']);

/* const userSurname = {};
console.log(userSurname)

let key = 'like birds';
someStr[key] = prompt('question?');
console.log(someStr)

let fruit = prompt('Fruit to buy?', 'orange');
let bag = {
    [fruit]: 5,
}

alert(bag.orange); */
/* "use strict"; */

/* function mUs(name, age) {
    return {
        name, 
        age
    }
}

let ourUser = mUs('Rick', 30)
alert(ourUser.name);
alert(ourUser.age);
alert('age' in ourUser); */

/* let codes = {
    '49': 'Germ',
    '41': 'Swith',
    '44': 'Great',
    '1': 'USA'
}

for (let code in codes) {
    console.log(code);
}
 */

//Object.assign

/* let user = {
    name: 'Ivan',
    age: 30
}

let clone = new Array();

for(let key in user){
    clone[key] = user[key];
}


console.log(clone.name, clone.age) */

/* let user = {
    name: 'Ivan',
    sizes: {
        height: 182,
        width: 50
    }
};
let perm1 = {canView: true};
let perm2 = {canEdit: true};

console.log(Object.assign(user, perm1, perm2))

user.sizes.width++
console.log(Object.assign({}, user)) */
/* 
const user = {
    name: 'Bogdan',
    status: 'Lector',
    createdBy: 'Ivan',
    someInfo: {
        age: 30,
        lenght: 170
    }
}

const {name, status,...other} = user;
console.log(`${name} and ${status}`);
console.log(`other = ${JSON.stringify(other)}`)


const newUser = {name};
console.log(`newUser = ${JSON.stringify(newUser)}`) */

/* const sub = {
    m: true,
    e: false,
    c: false,
}

const obj = {
    n: 'Gans',
    adr: 'New Line str'
}

const gena = {
    ...sub,
    ...obj,
}
console.log(`All info of: ${JSON.stringify(gena)}`);
console.log(Object.keys(gena));
console.log(Object.values(gena));
console.log(Object.entries(gena));

const student = {
    marks: [5, 4, 3],
    addNewMark(mark) {
        return this.marks.push(mark)
    }
}
student.addNewMark(5)
console.log(student.marks) */

/* function doStuff() {
    const obj1 = {
        foo: 10
    }

    const obj2 = {
        foo: 20
    }

    obj1.foo = 30;

    console.log(obj1, obj2);
}

doStuff()

const obj1 = {
    foo: {
        ttt: 20
    }
}

const o = {}

const obj2 = {
    ...obj1,
    foo: {
        ...obj1.foo
    },
    bar: 20
}
obj2.foo.ttt = 45;
const obj3 = Object.assign({bar: 30}, obj1, obj2)
const obj4 = JSON.parse(JSON.stringify(obj3))

console.log(obj1.foo === obj2.foo)
console.log(obj1 === obj2)
console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj4) */



/* if(transportKey === 'scooter') {
    console. log(`I'm on a scooter`)
} else if (transportKey === 'motorbike') {
    console. log(`I'm on a motorbike`)
} else if (transportKey === 'car') {
    console. log(`I'm on a car`)
} else {
    console. log(`I'm on my legs`)
} */
/* const transportKey = 'car';
const transportMap = {
    scooter: () => console.log(`I'm on a scooter`),
    motorbike: () => console.log(`I'm on a motorbike`),
    car: () => console.log(`I'm on a car`),
    plane: () => console.log(`I'm on a plane`),
}
console.log(transportMap)

const validTransportKey = transportMap.hasOwnProperty(transportKey)
    ? transportKey
    : 'plane'

console.log(transportMap)

console.log(Object.keys(transportMap))
console.log(Object.values(transportMap))
console.log(Object.entries(transportMap))

console.log(Object.keys(transportMap).includes(transportKey))
transportMap[validTransportKey]() */

/* const x = {
    //do1: function () {},
    do2() {console.log('hello world !!!')},
    do3: () => console.log('hello world')
}

x.do2()

const country = {
    cities : ['Kiev'],
    getCities: ()=>  {
        console.log(this)
    }
}

console.log(country.cities[0])

country.getCities() */

/* function foo() {
    console.log(this);
}

function hush() {
    console.log(this);
}

foo()

var x = {
    bar: foo,
    red : hush
 }

x.red()
x.bar()

new foo()


/* function getValidator() {
    return {
        shouldHaveOnlyLatin: false,
        shouldHaveDitgits: false,
        latinOnly() {
            this.shouldHaveOnlyLatin = true
        },
        hasDigits() {
            this.shouldHaveDitgits = true
        },
        validate(value) {
            let isValid = true
            if (this.shouldHaveOnlyLatin) {
                isValid = value.split('').every(
                    c => {
                        const lowerChar = c.toLowerCase()
                        return 'a' <= lowerChar && lowerChar <= 'z'
                    }
                )
            }
            if (this.shouldHaveDitgits) {}
            return isValid
        }
    }
}

const validator = getValidator()
validator.latinOnly()
validator.hasDigits()

const value = 'foo'

const result = validator.validate(value)

console.log(value, result)
 */


/* const phone = {
    price: 150,
    nameOfGood: 'iPhone',
    foo: {
        bar: 10,
    }
};

const {
    price: phonePrice,
    nameOfGood,
    foo,
    ...otherProperties
} = phone */

// const { price, nameOfGood } = phone ;
/* const { bar } = phone.foo; */
// console.log(price, nameOfGood, bar)
/* console.log(otherProperties)

const arr = [1, 2 , 3 ,4, 5];

const [, ,second, ...others] = arr
console.log(arr, second)
console.log(others) */

/* let a = 10;
let b = 20;

[a, b] = [b, a];
console.log('a', a);
console.log('b', b)


const arr = [1, 2, 3, 4, 5, 6] */

/* const reducedArr = arr.reduce(function (sum, current) {
    debugger;
    return sum + current
}, 0);
document.writeln(reducedArr); */
/*
const callback = (prev, x, index, aRr) => {
    console.log(`Prev: ${prev}, item: ${x}, index: ${index}`, aRr);
    return prev + x;
}

const sum = arr.reduce(callback, 50);

console.log(sum);

const users = [
    {name: 'Str', age: 36},
    {name: 'Arr', age: 46},
    {name: 'Nmb', age: 56}
]; */
/*
const users = [
    {naMe: 'Str', age: 36},
    {naMe: 'Arr', age: 46},
    {naMe: 'Nmb', age: 56}
]; */
/* for (let user of users) {
    result[user.name] = user.age;
} */

/* const callback = ((prev, {naMe, age}) => ({...prev, [naMe]:age}));
const result = users.reduce(callback, {});
console.log(result);

const str = '223';
const arr1 = [...str].map(n => + n);
console.log(arr1);
const ourRes = arr1.reduce((a, b) => a + b, 0);
console.log(ourRes)

function digital_root(n) {
    return [...n.toString()].map(s => + s).reduce((a,b) => a+b)
}

console.log(digital_root(16)) */

// Global Scope

/* console.log(this); */
// Browser this -> Window
// NodeJs -> Global

// Function Scope

/* function func(){ */
    // this -> Window || Global for NodeJS;
/* } */

// Object

//Object.method() // {
    // this -> Object;
//}

/* const user = {
    name: 'Name',
    surName: 'SurName',
    getFullName() {
        return this.name + ' ' + this.surName
    }
}

console.log(user.getFullName()) */


/*
// Constructor
function Constructor () {
    return this -> new Entity
} */

/* event Listener
html.onclick html.onChange html.addEventListener
function() {
    this --> htmlElement
}
*/

// Arrow function
/*
    () => this --> declaring context
*/