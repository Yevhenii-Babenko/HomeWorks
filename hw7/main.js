/* 'use strict'; */
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/*1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція
повинна викликатись через call та працювати з даними через this */

function getMyTaxes(salary) {
    return (salary * this.tax).toFixed() 
}

getMyTaxes.call(ukraine, 'salary')
document.writeln(`<p>1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Податок getMyTaxes.call(ukraine, 2000) скаладає: ${getMyTaxes.call(ukraine, 2000)}</p>`);

/* 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
скільки у середньому податків платять IT-спеціалісти у кожній країні. 
(tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this */

function getMiddleTaxes() {
    return Math.floor(this.tax * this.middleSalary);
}

// console.log(getMiddleTaxes.call(litva));
document.writeln(`<p>2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
скільки у середньому податків платять IT-спеціалісти у кожній країні. 
(tax * middleSalary). Результат виконання функції для Литви getMiddleTaxes.call(litva): ${getMiddleTaxes.call(litva)}</p>`);


/* 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній 
країні. (tax * middleSalary * vacancies)*/
function getTotalTaxes(){
    return (this.tax * this.middleSalary * this.vacancies).toFixed()
}
getTotalTaxes.call('country')
document.writeln(`<p>3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній 
країні. (tax * middleSalary * vacancies). Результат виконання функції для України ${getTotalTaxes.call(ukraine)}, 
для Латвії ${getTotalTaxes.call(latvia)}, для Литви ${getTotalTaxes.call(litva)}</p>`)

/*4.Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } 
кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. 
taxes – розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes; */

function getMySalary(country) {

    let getRundomSalary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    let profit = getRundomSalary - (getRundomSalary * this.tax);
    console.log(getRundomSalary)
    console.log(profit)
    console.log(this.tax)
    /* 
    return {
        salary: number, taxes: number, profit: number
    }
    */
   return {salary: (min, max) => {
       Math.floor(Math.random() * (2000 - 1500 + 1) + 1500)
   }}
}

getMySalary.call(ukraine)




















































/* 
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