var a = 100;
let b = 200;
const c = 300;

if (true) {
  var a = 1000;
  let b = 2000;
  const c = 3000;
}

console.log(a); // 1000, as var is
console.log(b); // 200
console.log(c); // 300

function one() {
  const userName = "Sahil";
  function two() {
    const website = "youtube";
    console.log(userName);
  }
  // console.log(website); =>  out of scope
  two();
}

one();

if (true) {
  const userName = "Manas";
  if (userName === "Manas") {
    const website = "youtube";
    console.log(userName + website);
  }
  // console.log(website) =>  out of scope
}

// console.log(userName); =>  out of scope

console.log(addOne(5)); // can access 'addOne'

function addOne(num1) {
  return num1 + 1;
}

// console.log(addTwo(5)) =>  Cannot access 'addTwo' before initialization
const addTwo = function(num){
  return num + 2
}
console.log(addTwo(6));

