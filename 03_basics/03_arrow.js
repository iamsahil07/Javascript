const user = {
  userName: "Sahil",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to website.`);
    console.log(this);
  },
};

user.welcomeMessage();
user.userName = "sam";
user.welcomeMessage();

// In this node environment we do not have any global object
// but in browser we have global object named as "wesite"

console.log(this); // so output => {}

function one() {
  let userName = "Sahil";
  console.log(this.userName);
}
one(); // undefined

const chai = function () {
  let username = "Sahil";
  console.log(this.username);
};
chai();
const two = () => {
  let userName = "Sahil";
  console.log(this.userName);
};

two();

const addTwo = (num1,num2) => {
    return num1+num2
}

const addthree = (num1,num2,num3) => (num1+num2+num3)

const addfour = (n,m,o,p) => n+m+o+p

const addName = (num1, num2) => ({username: "Sahil"})

console.log(addTwo(2,3));
console.log(addthree(2,3,4));
console.log(addfour(2,3,4,5));

// const myArr = [2,5,4,3,7]
// myArr.forEach()
