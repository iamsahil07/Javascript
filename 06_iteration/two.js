// for in : the loop iterate over all enumerable properties
// of the object itself and those object  inherits from its
// prototypes chain

// On object

const myObj = {
  py: "python",
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
};

for (const key in myObj) {
  console.log(`${key} is the extension of ${myObj[key]}`);
}

// On array

const programmingLanguage = ["py", "c++", "c", "js", "rb"];
for (const key in programmingLanguage) {
  console.log(key); // it is returning key for each element
}


// on Map

const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("Aus","Australia")

for (const key in map) {
    console.log(`${key} is the shortcut for ${value}`);
        
} // it is not iteratable so it does not give any output