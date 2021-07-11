//HW5: Arrays Methods

/* 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2] */
/**
 * 
 * @param {*} length 
 * @param {*} min 
 * @param {*} max 
 * @returns randomNumArr
 */
function getRandomArray(length, min, max) {
    let randomNumArr = [];
    /* let randomNumb = function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    } */
    //randomNumArr.push(Math.floor(Math.random() * (max - min + 1) + min));
    for(let index = 0; index < length; index++){
        const element = length[index];
        randomNumArr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    /* for(num of randomNumArr) {
        randomNumArr.push(num)
    } */
    /* for (let index = 0; index < length; index++) {
        return console.log(randomNumArr.push(randomNumb(min, max)))
    }
 */
    return randomNumArr
}
document.writeln(`<div style="color:green; margin: 50px 20px"><p>Завдання№1: Тут ми можемо бачити результати фінкції getRandomArray() ${getRandomArray(7, 3, 50)}</p></div>`)

/* Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4 */

/* function getAverage(...numbers) {
    const getArr = [...numbers];
    if(getArr != )
} */


/*5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */

/**
 * 
 * @param  {...any} numbers 
 * @returns 
 */
//function 
const filterEvenNumbers = (...numbers) => [...numbers].filter(e => e % 2 === 0);


filterEvenNumbers(1, 2, 4, 5, 6, 8, 7, 10)

document.writeln(`<div style="color:blue; margin: 50px 20px"><p>Завдання№5: Тут ми можемо бачити результати фінкції filterEvenNumbers() ${filterEvenNumbers(1, 2, 4, 5, 6, 8, 7, 10)}</p></div>`)






































/* const emojies = ['smile', 'sad', 'happy']; */

/* function forEach(arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        callback(element, index, arr);
    }
} */


/* function callback(element, index, target) {
    console.log('element:', element);
    console.log('index:', index);
    console.log('target:', target);
}
 */
/* emojies.forEach(function(element, index, target) {
    console.log('element:', element);
    console.log('index:', index);
    console.log('target:', target);
}) */

/* forEach(emojies, callback);
function callback1 (element){
    return element.repeat(2);
}
 */

/* function callback1(element, index, target) {
    console.log('element:', element);
    console.log('index:', index);
    console.log('target:', target);
}


function map(arr, callback) {
    const newArray = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        newArray.push(callback(element, index, arr));
    }

    return newArray;
}

const maped = map(emojies, callback1);

console.log('here is origin array', emojies);


const numbers = [2, 4, 6];

const doubles = numbers.map(function(element){
    return element * 2;
});

console.log(doubles); */

/* function filter(arr, predicate) {
    const newArray = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        const current = predicate(element, index, arr);

        if (current) {
            newArray.push(element);
        }

    }

    return newArray
}

function predicate(element, index, target) {
    return index % 2 === 0;
    //return index % 2 === 0;
    //return element % 2 === 0;
}

const numbers = [1, 5, 7, 12, 15, 20]

const filtered = filter(numbers, predicate);

console.log('here is origin array',numbers);
console.log('there is filtered array', filtered);

function callback1(user, index, target) {
    return user.age > 10;
}

const user = [
    {userName: 'Vasya', age: 12},
    {userName: 'Petro', age: 42},
    {userName: 'Adminator', age: 22},
]; */

/* const match = findIndex(user, callback1);

function findIndex(arr, callback) {
    for( let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if(Boolean(callback(element, index, arr)) === true) {
            return index;
        }
    }

    return -1
}

console.log('This is origin user array', user);
console.log('this is a result of .find() method from user array', match);

if (~match) {
    console.log('I found match');
} else {
    console.log('No match');
}

const isEvery = every(user, callback1);
const isAny = some(user, callback1);


console.log('every is', isEvery);
console.log('any is ', isAny);


function some(arr, callback1) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if(callback(element, index, arr)) {
            return false
        }

        return true
    }
}

function every(arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if(!callback(element, index, arr)) {
            return false
        }
        return true
    }
} */


/* const sumAge = user.reduce((accumulator, currentElement)=>{
    return accumulator + currentElement.age
}, 0);
 */
/* console.log(sumAge);

let users = [
    {name: 'Zor', age: 13},
    {name: 'Pet', age: 12},
    {name: 'And', age: 16},
    {name: 'Rom', age: 23},
    {name: 'Pav', age: 43},
    {name: 'Glb', age: 53},
    {name: 'Tim', age: 63},
];


function callback2(accum, currectElement, index, target) {
    const key = currectElement.age;
    const name = currectElement.name;

    if (accum[currectElement.age] === undefined) {
        accum[currectElement.age] = [currectElement.name]
    } else {
        accum[currectElement.age].push(current.name)
    }
    return accum
}

function callback3(prevSum, element) {
    return prevSum + element;
}

let numberss = [2, 4, 6, 8]

function reduce(arr, callback, defaultValue) {
    //Rule#1: If there isn't value by default of array is empty thus return an arror
    if (!defaultValue && arr.length < 1) {
        throw new Error('Array is empty!')
    }

    let start;
    let prevValue;

    //Rule#2: if there is value by defualt then fool starts from 0 index
    if(defaultValue) {
        start = 0;
        prevValue = defaultValue;
    //Rule#3: If there isn't value by default the loop starts from the first element from array
    } else {
        start = 1;
        prevValue = arr[0]
    }

    for (let index = start; index < arr.length; index++) {
        const element = arr[index];
    //Rule#4 Previous value after each iteration
    //Therefor it is equal to return from callback
        prevValue = callback(prevValue, element, index, arr)
    }
    return prevValue
}

const summ = reduce(numberss, callback3, 0)

console.log(summ)

function callback4(a, b) {
    return a - b;
}
 */
/* const string = ['400', '14', '2'];

string.sort(callback4);

console.log(string) */


/* const emoJies = ['smile', 'sad', 'happy'];
 */
/* const string = emoJies.map(function(element) {
    return element.repeat(3);
});


const oneLineStr = string.reduce(function(str, element) {
    return str + element;
})

console.log(string) */

/* const oneLineString = emoJies.map(function(element) {return element.repeat(3);
}).reduce(function(str, element){ return str + element}).forEach(function(element) {
    console.log(element)
});

console.log(oneLineString); */