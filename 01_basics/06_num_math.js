const score = 400
console.log(score);
const balance  = new Number(400)
console.log(balance);
console.log(balance.toString().length);

console.log(balance.toFixed(3)); // 400.000 (returns scientific notation)

const otherNum = 123.4566
console.log(otherNum.toPrecision(4)); // 123.4

const m = 1000000
console.log(m.toLocaleString('en-IN')); // can be used to count no. of zeros


//  ******************  Maths  *****************  //

console.log(Math.round(4.6));

console.log(Math.random()); // returns any random value which returns greater than or equal to 0 and less than 1
console.log((Math.random() *10)+1);
console.log(Math.floor((Math.random() * 10)+1));

const max = 33
const min = 29

console.log(Math.floor((Math.random()*(max - min +1))+min)); //  returns values between min and max