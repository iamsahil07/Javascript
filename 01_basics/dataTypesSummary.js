// Primitive

// 7 types: number, string, boolean, null, undefined, symbol, binInt


const score = 200;
const scorevalue = 250;

const isLoggedIn = true;
const outSideTemp = null;

const id = Symbol('123');
const anotherId = Symbol('123');


console.log(id === anotherId);


// Refrence (non primitive)

const hero = ['superman', 'spider-man', 'iron-man', 'hulk']

let obj = {
    name: "sahil",
    age: 22
}

const func = function(){
    console.log("hello world");
}

console.log(typeof anotherId);