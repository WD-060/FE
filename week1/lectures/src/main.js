console.log("Hello, world!");

// Data types
// Primitive data types
//String
("I am Maria");
("I'm Maria");
// Numbers
9;
//Boolean
true;
false;
// Bigint
9007199254740991n;
//Undefined
//Null
// Symbol

// Declaring a variable
const firstName = "Maria";
console.log(firstName);
let age;
console.log(age);

console.log(age);
var lastName = "";
// let age = 40;

// block scope
//Conditionals
// falsy -> false, 0, '', null, undefined, NaN
// && -> and
// || -> or
// ! -> not
// if/else conditional
if (age) {
  console.log("Age is truthy");
}
if (!age) {
  console.log("Age is falsy");
}

if (age < 18) {
  console.log("You are a minor");
} else if (age < 65) {
  console.log("You are  an adult");
} else {
  console.log("You are an elder");
}

if (age < 17 && age === 17) {
  console.log("You are a minor");
}

// switch

const day = "Monday";
let message;

switch (day) {
  case "Monday":
    message = "It's Monday";
    break;
  case "Tuesday":
    message = "It's Tuesday";
    break;
  case "Wednesday":
    message = "It's Wednesday";
    break;
  case "Thursday":
    message = "It's Thursday";
    break;
  case "Friday":
    message = "It's Friday";
    break;
  default:
    message = "It's weekend";
}

console.log(message);

// loops
// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
