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

/******************************/

// Stack(primitive) and Heap(non-primitive)

let myYtName = "hiteshchoudharydotcom"

let anotherName = myYtName

anotherName = "chaiaurcode"

console.log(myYtName);
console.log(anotherName);

let userOne = {
    email : "sahil@gmail.com",
    upi : "upi07@sbi"
}

userTwo = userOne;

userTwo.email = "manas@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);