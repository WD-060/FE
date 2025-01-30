//Conditionals
// They are blocks of code that allow us to execute different code based on different conditions.
// We can use the following operators to compare values:
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// === equal value and equal type
// !== not equal value or not equal type
// == equal value
// != not equal value

// We can use the following operators to concatenate conditions:
// && -> and
// || -> or

// We can use the following operator to negate a condition:
// ! -> not

//There are two main types of conditionals:
// if / else conditional
// 
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

// Switch conditionals

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
