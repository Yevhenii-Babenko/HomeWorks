function doStuff() {
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
    ...o,
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
console.log(obj4)