// object literals : does not make singleton

const mysym = Symbol("key1")

const JsUser = {
    name : "sahil",
    [mysym] : "mykey1",
    age : 22,
    location : "Kanpur",
    email : "sahil@gmail.com",
    isLoggedIn : false,
    lastDayLogIn : ["monday","sunday","friday"]
}

console.log(JsUser.email);
console.log(JsUser["age"]);
console.log(JsUser[mysym]);

Object.freeze(JsUser) // freeze does not allows to update any object
JsUser.email = "sahil@yahoo.com"
console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hi Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hi Js User, this is ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

