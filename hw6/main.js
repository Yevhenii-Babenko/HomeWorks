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