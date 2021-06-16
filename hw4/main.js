/**
 * It will print cities to the console
 * @param {string[]} cities cities of Ukraine 
 */

/* function printCities(cities) {
    for (let index = 0; index < cities.length; index++) {
        const city = cities[index];
        const fisrstLetter = city[0].toUpperCase();
        const remainder = city.slice(1);
        cities[index] = `${fisrstLetter}${remainder}`
    }
    
    console.log(cities.join(', '));
}

const cities = ['kyiv', 'lviv', 'odessa'] 

printCities(cities)

for (const city of cities) {
    if (city === 'kyiv') {
        console.log('Prices are crazy');
    }
} */
/* const newArray = new Array(1,2);

if (newArray && newArray.length) {
    console.log('Array is not empty');
}


const listOfT = ['Clark', 'Bill', 'Bob', 'Sem']

listOfT.pop()
console.log(listOfT) */

/* function getNumber(amount) {
    const numbers = [];

    for (let index = 0; index < amount; index++){
        const input = prompt('Enter a number');
        const number = Number.parseInt(input);
        numbers.push(number);
    }
    return numbers
}

function getMax(numbers) {
    let max = numbers[0]

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];

        if (number > max) {
            max = number;
        }
    }
}

const numbers = getNumber(3);
const max = getNumber(numbers);

console.log(numbers);
console.log(max); */
/* 
const str = 'uk,en,su';
const arrayLang = str.split(',');
const reverseArray = arrayLang.reverse()

console.log(arrayLang);

const joinedStr = arrayLang.join(',');
console.log(joinedStr); */
/* 
let a = [55];
let b = a;

a.push(123);
b.push(43);

console.log(a);
console.log(b); */

const creatures = ['elf', 'ogre', 'dwarf'];

if(creatures.includes('ogre')){
    console.log('AAAA, ogre!')
}

function kill(creatures){
    const index = creatures.indexOf(creatures);
    creatures.slice(index, 1)
}

kill('ogre');

console.log(creatures);

const squad = creatures.concat('wizard', 'hobbit');

const temp = ['frodo', 'lea'];

const squad1 = [].concat(temp);

temp.push('borat')

console.log(squad, squad1, temp)