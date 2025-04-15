// In JavaScript, a Promise represents the eventual completion
// (or failure) of an asynchronous operation and its resulting 
// value; it can be in one of three states: pending, fulfilled,
//  or rejected

// Three States:
// Pending: The initial state, where the operation has not yet completed. 
// Fulfilled: The operation completed successfully, and the promise has a value. 
// Rejected: The operation failed, and the promise has a reason for the failure.

// Asynchronous Operations:
// Promises are designed to handle asynchronous operations, 
// which are tasks that don't complete immediately but take 
// some time to finish (e.g., fetching data from a server, 
// reading a file)

const promiseOne = new Promise(function(resolve, reject){
    // Do async task
    // DB calls, cryptography, network calls
    setTimeout(() => {
        console.log("Async task is complete.")
        resolve()
    }, 2000)
})

promiseOne.then(() => {
    console.log("Promise consumed")
})

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async task 2 completed");
        resolve()
    },2000)
}).then(() => {
    console.log("Promise consumed");
    
})

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(()=>{
        // In resolve() parameters we can pass data, and
        // usually data is in the form of object.
        resolve({userName : "Sahil" , email : "sahil@gmail.com"})
    },1000)
})

promiseThree.then((user) => {
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let error = 1
        if(!error){
            resolve({userName: "Sahil", email: "sahil@gmail.com"})
        }else{
            reject("Error: Something went wrong")
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.userName
}).then((userName) => {
    console.log(userName)
}).catch((error) => {
    console.log(error)
}).finally(() => 
    console.log('The promise is resolved or rejected'))

const promiseFive = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let error = 1
        if(!error){
            resolve({lang: "JavaScript", alt: "React"})
        }else{
            reject("Error: Js went wrong")
        }
    },1000)
})

async function consumePromiseFive(user) {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()