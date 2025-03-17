function myName() {
  console.log("s");
  console.log("a");
  console.log("h");
  console.log("i");
  console.log("l");
}

myName; // it is a refrence of above function
myName(); // it is the execution of a function

function addTwoNum(num1, num2) {
  // let result = num1 + num2;
  // return result;
  return num1 + num2;
}

const num = addTwoNum(3, 9);
console.log(num);

function loginUserMessage(userName) {
  if (!userName) {
    console.log("Please enter correct userName");
    return;
  }
  return `${userName} just logged in.`;
}

console.log(loginUserMessage("Sahil")); // here we have passed a argument as "Sahil"
console.log(loginUserMessage("")); // it passes undefined argument
console.log(loginUserMessage()); // it passes undefined argument

function calculateCartPrice(val1, val2, ...val3) {
  return val3; // val1 = 200 and val2 = 300
}
console.log(calculateCartPrice(200, 300, 500, 400, 900));

const user = {
  userName: "sahil",
  email: "sahil@gmail.com",
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.userName} and email id is ${anyobject.email}`
  );
}

// handleObject(user)

handleObject({
    userName : "manas",
    email : "manas@gmail.com"
})

const arr = [200, 300, 400, 500]
function returnSecondValue(getArr){
    return getArr[1]
}
console.log(returnSecondValue(arr));
console.log(returnSecondValue([200,600,800,900,300]));

