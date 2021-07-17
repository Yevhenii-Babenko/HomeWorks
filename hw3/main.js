//HW-3 Functions

//1.Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 

function getMaxDigit(number) {
    let arrayWithNumber = Array.from(String([number]));
    return Math.max(...arrayWithNumber);
}

//2.Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

let powerOfNunber = function(number, power) {
    let result;
    for (let i = 0; i < power; i++) {
        result = number;
    }
    return  result *= power;
}

//3.Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

let firtsLetterToUpperCase = function (name) {
    return name[0].toUpperCase() +  name.slice(1).toLowerCase();
}

//4.Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
let pureSalary = function(amount, fee) {
    return (amount -= (amount * (fee / 100)));
}

//5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

let getRandomNumber = function(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n)
}

//6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

let countLetter = function(letter, phrase) {
    let counter = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === letter) {
            counter++;
        }
    }
    return counter;
}

document.writeln(`Функція №1: ${getMaxDigit(569)}; Функція №2: ${powerOfNunber(4, 18)}; Функція №3: ${firtsLetterToUpperCase('вЛаД')};
Функція №4: ${pureSalary(1500, 19.5)}; Функція №5: ${getRandomNumber(3, 5)}; Функція №6: ${countLetter('m', 'madam')}`);


/* function getDay() {
    return new Date().getDate();
}

console.log(getDay());

function getFact(n){
    if(n === 1) return 1;
    if(n > 10) return 0;
    return n * getFact(n - 1);
}

document.writeln(getFact(3)); */

/* (function(moduleName){
    document.writeln(moduleName);
    let a = 100;
    let b = 200;
})('hey');
 */
/* function greeting(name = "Stranger") {
    console.log(`Hello, ${name}`)
}

greeting('')
greeting('Nick')

function exapmle(){
    return 'Example value';
}
const resultFunc = exapmle()
console.log(resultFunc);


function noReturn(){
    let a = 100;
    a *= 14;
    return a = a -200;
};
const noReturnRes = noReturn();
console.log(noReturn());

function getSum(...numbers){
    document.writeln(numbers);
}

const args = [1, 2, 3, 4, 5];

getSum(...args); */

/* let globalVar = 100;
let a = 'global';
const finc = function(){
    let localVar = 10500;
    let a = 'local';
    return document.writeln(`a value is equal ${a}, ${localVar}`);
}

finc();
 */
/* // DRY - Don't repeat yourself

//spread

const numbers = [3, 4, 5, 8]

const ob1 = {
    a: 3,
    b: 5,
    c: 1
}

const ob2 = { ...ob1 };

ob2.b = 7;

console.log(ob1);
console.log(ob2);

const maxValue = Math.max(...numbers)

console.log(maxValue); */

/* console.log(...'hello', ...'hi') */
/* 
function declare() {
    this.foo = 10
    console.log('declare', this);
}

const exprees = function () {
    console.log('express', this);
}

function run() {
    const throughArrow = () => {
        console.log('arrow', this)
    }

    throughArrow()
}

declare()
exprees()
run()

let x = {
    y: declare
}

x.y()
const Arrow = () => 4;

console.log(Arrow())

new declare()

declare.apply([])

console.log(...'Hello'[3]) */

//scope chain
// shasowing


/* const x = 1;

function func1() {
    const x = 2;
    console.log('func1', x);

    func2()

    var y = 10;

    function func2() {
        const x = 3
        console.log(func2, x)
    }

}

func2()

console.log('global', x)

func1() */

//Immediately invoked function expression

//pure function - conception 

/* const numbers = []

function add(number) {
    numbers.push(number);
}

add(2);
add(3);
add(1);

console.log(numbers) */
/* function run() {

} */
/* let count = 0; */

//recursion
/* function logForever() {
    count++
    console.log('ping')
    if (count < 800) {
        logForever()
    }
}

logForever() */

/* let ourFirstFunction = function () {
    console.log(...'Hello world!')
}

ourFirstFunction();

let sayHelloTo = function (name1, name2, name3) {
    console.log('Hello' + ' ' + name1 + ' ' + name2 + ' ' + name3 + '!');
}

sayHelloTo('Ivan', 'Ivan1', 'Ivan2');

let wordsArry = ['planet', 'worn', 'flower', 'computer'];

let newArray = ['one', 'two', 'three', 'four']

let chooseReslt = function(words) {
    return words[Math.floor(Math.random() * words.length)];
}


console.log(chooseReslt(newArray)); 

let genereteRandomFrathes = function () {
    let randFaceParts = ['Face', 'Nose', 'Head'];
    let randAdjects = ['Smelly', 'Boring', 'Stupid'];
    let randomWords = ['Marmot', 'Stick', 'Monkey', 'Rat'];

    let randString = 'Your ' + chooseReslt(randFaceParts) + ' like is a ' + chooseReslt(randAdjects) + ' ' + chooseReslt(randomWords) + '!!!';

    return randString
}

console.log(genereteRandomFrathes());

let fifthLetter = function(name) {
    if (name.length < 5) {
        return;
    }

    return `The fifth letter of your name is ${name[4]}!`;
};

console.log(fifthLetter('Richer'))  */