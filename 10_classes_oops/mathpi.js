const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)

const day = {
    name : "Monday",
    isSpecialDay : false,
    weather : "Normal",
    week : function(){
        console.log(`don't know!`);
    }
}

console.log(Object.getOwnPropertyDescriptor(day,"name"))

Object.defineProperty(day,'name',{
    writable : false,
    enumerable : false // it is used to stop iterate a perticular property, in our it is name.
})

console.log(Object.getOwnPropertyDescriptor(day,"name"))

for(let [key,values] of Object.entries(day)){
    // Condition is used to ignore the function
    if(typeof values !== `function`){
        console.log(`${key} : ${values}`)
    }
}