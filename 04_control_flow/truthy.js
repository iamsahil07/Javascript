const userEmail = [];

if (userEmail) {
  console.log("got userEmail");
} else {
  console.log("dont have user email");
}

// falsy

// false, 0, -0, Bigint 0n, "", undefined, null, NaN

// truthy

// "0", "false", " ", [], {}, function(){}

// to check there is empty array

if (userEmail.length === 0) {
  console.log("empty array");
}

// to check there is empty object

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("empty object");
}

// Nullish coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 200;
val1 = null ?? 300 ?? 100;
console.log(val1);

// ternary operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");
