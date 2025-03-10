const marvel_heros = ["thor", "iron-man", "captain-america"]
const dc_heros = ["batman", "super-man", "flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);


/***********   merging of 2 arrays ************/


// method 1 :  by using concat

const all_Heros = marvel_heros.concat(dc_heros)
console.log(all_Heros);


// method 2 :  by using spread operator

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);


/****   converting an nested array into a normal array   ****/

const nested_arr = [1,2,3,[4,5,6],7,[8,9,[5,6,7]]]
const normal_arr = nested_arr.flat(Infinity)
console.log(normal_arr);

console.log(Array.isArray(marvel_heros));
console.log(Array.from("Sahil"));
console.log(Array.from({name: "Sahil"})); // gives an empty array


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));
