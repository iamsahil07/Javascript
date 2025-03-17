// Here we will see how we can make object singleton or
// declare the object using constructor

const tinderUser1 = {}; // non - singleton object

const tinderUser = new Object(); // singleton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedin = true;

console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Sahil",
      lastName: "Prakash",
    },
  },
};

console.log(regularUser.fullName.userFullName.lastName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "a", 6: "b" };

const obj4 = { obj1, obj2 };
console.log(obj4); // Gives nested object

/****    joining 2 or more object    ****/

// Method 1 : By using assign

const obj5 = Object.assign({}, obj1, obj2, obj3);
console.log(obj5);

// Method 2 : By using spread operator

const obj6 = { ...obj1, ...obj2, ...obj3 };
console.log(obj6);

const user = [
  {
    id: 1,
    email: "om@gmail.com",
  },
  {
    id: 2,
    email: "sahil@gmail.com",
  },
  {
    id: 3,
    email: "manas@gmail.com",
  },
];

console.log(user[2].id);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("id")); // To check the key is present in object or not

/****   Object Destructuring    ****/

const course = {
  name: "Js in hindi",
  price: "Free",
  courseInstructor: "Hitesh",
};

const { courseInstructor: instructor } = course;
console.log(instructor);

/****   intro to API ****/

// type : 1

/* 

  {
      "name" : "sahil"
      "email" : "sahil@gmail.com"
   }

*/

// type : 2

/* 

 [
    {},
    {},
    {}
  ] 
  
*/