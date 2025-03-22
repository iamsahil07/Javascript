// for of : It iterates over values of an iteratable
// object like array,map or strings.

// ["", "", ""]
// [{}, {}, {}]

// On array

const arr = [1, 2, 3, 4, 5, 6];

for (const val of arr) {
  console.log(val);
}


// On string

const greeting = "Hello World!";
for (const greet of greeting) {
  console.log(`Each char is ${greet}`);
}


// On Maps : It is an object which holds key-value pair and
// key may only occur once.

const map = new Map();
map.set("In", "India");
map.set("USA", "United States of America");
map.set("Aus", "Australia");

console.log(map);

for (const [key,value] of map) {
  console.log(`${key} :- ${value}`);
}

// On object

const games = {
  game1 : 'nfs',
  game2 : 'coc'
}

for (const gameName of games) {
  // console.log(gameName);  it throws error as object is not iteratable.
  
}