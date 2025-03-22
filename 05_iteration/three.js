// forEach : it is an iterative method which an provided callback() 
// function for each array element

// NOTE : forEach does not return any value

const arr = ["js", "py", "cpp", "ruby"];

arr.forEach(function (val) {
  // console.log(val);
});

arr.forEach((lang) => {
  // console.log(lang);
});

function printMe(item) {
  // console.log(item);
}

arr.forEach(printMe);

arr.forEach((value, index, arr) => {
  // console.log(value,index,arr);
});

const myCoding = [
  {
    programmingLanguage: "python",
    programmingFile: "py",
  },
  {
    programmingLanguage: "ruby",
    programmingFile: "rb",
  },
  {
    programmingLanguage: "javascript",
    programmingFile: "js",
  },
];
myCoding.forEach((lang) => {
  console.log(lang.programmingFile);
});
