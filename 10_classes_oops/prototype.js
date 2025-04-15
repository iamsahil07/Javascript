let myName = "Sahil@    "
let channelName = "chaiOrCode     "

let myHeros = ["spider-man","thor"]

let heroPower = {
    thor : "hammer",
    spiderman : "spider-web",
    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.sahil = function(){
    console.log(`sahil is present in all objects.`)
}

Array.prototype.forArr = function(){
    console.log("sahil is now present in arr.")
}
heroPower.sahil()
myHeros.forArr()
// heroPower.forArr()

let anotherName = "Sahil     "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

myName.trueLength()
// inheritance
const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : true
}

const supportTA = {
    fullTime : true,
    makeAssignment : "js assignment",
    __proto__ : teachingSupport
}

const user ={
    name : "sahil",
    email : "abc123@gmail.com"
}

// out-dated syntax
teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(supportTA,teacher)