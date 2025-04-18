// filters : It is an iterative method which calls an callback() 
// function once for each element in an array and construct a 
// new array of all values for which callback() returns truthy values.

const code = ["ruby", "python", "cpp", "java", "javascript"];

const value = code.forEach((lang) => {
  return console.log(lang);
  return lang; // returns undefined
});

console.log(value);

const value1 = code.filter((item) => {
  return item;
});
console.log(value1);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  return num > 4;
});
console.log(newNums);

// using forEach as a filter

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = [];

myNum.forEach((num) => {
  if (num > 4) {
    newNum.push(num);
  }
});

console.log(newNum);

// other examples

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "istory");
console.log(userBooks);

userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === "Science");
console.log(userBooks);
