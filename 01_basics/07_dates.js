// Dates and time

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())

console.log(myDate.getMonth()+1);
console.log(myDate.getDay());

let newDate = new Date("2025-03-11")
console.log(newDate.toString());
let myTimeStamp = Date.now()
console.log(myTimeStamp) // returns total miliseconds from 1st Jan 1970 to today
console.log(newDate.getTime());
console.log(Math.floor(newDate.getTime()/1000)); // converted miliseconds to seconds

