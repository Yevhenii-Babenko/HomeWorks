/* 'use strict'; */







































































/* const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const x = 2; */


/* for(let i = 0; i < 3; i++){
    const f = ()=>{
        console.log(i)
    };
    setTimeout(f, 1500);
}

function produce(devName) {
    let count = 0;
    const device = () => {
        count++;
        console.log(`${devName} - launch ${count}`)
    };
    return device;
}

const cellPhone = produce('Cell Phone');
const laptop = produce('Laptop')
cellPhone();
cellPhone();
cellPhone();
laptop();
laptop();
cellPhone(); */

/* function creatDicto(owner) {
    let text = '';
    let dicto = (phrase = '') => {text += phrase;
        return `${owner} saved: ${text}`
    };
    dicto.reset = () => {
        text = ''
    };
    return dicto
}

const myDicto = creatDicto('Misha');

myDicto('It ');
myDicto('works ');
myDicto('somehow! ')

myDicto.reset();
myDicto('Hello ');
myDicto('World')
const result = myDicto();
console.log(result) */
/* 
1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви
заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати
з даними через this
 */



/* const user = {
    name: 'Name',
    surname: 'Surname',
    getFullName(){
        setTimeout(() => {
            return this.name + ' ' + this.surname;
        }, 3000);
    },
    getFullNameArrFunc: () => {
        const obj = () => {
            return this.name + ' ' + this.surname
        }
        obj();
        //return this.name + ' ' + this.surname
    }
}

console.log(user.getFullName()); */

// closure 

/* stack = [{
    le: {
        current: 0,
    },
    Scope: {},
    context: this
}] */
/* function getCounter(name, start = 0) {
    let current = start;
    return function(){
        console.log(`Counter is ${name}: ${current}`)

        current += 1;
    };
}

const counter = getCounter('From 0');

counter();

const nextCont = getCounter('From 10', 10)
nextCont();

function thisFunc(timestamp) {
    console.log(this.name + ' ' + this.surname + ' ' + timestamp);
}

const user = {
    name: 'Serg',
    surname: 'Prodan'
}

thisFunc.apply(user, [new Date()]) */