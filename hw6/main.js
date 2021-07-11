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

foo.apply({}) */
/**
 * 
 * @param {string} value
 */
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