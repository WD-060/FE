//Functions

// 1.
function greet() {
  // console.log("Hello, World!");
  return "Hello, World!";
}

console.log(greet());

// 2.
function square(num) {
  return num * num;
}
console.log(square(2));
console.log(square(5));
console.log(square(16));

// 3.
function getDayName(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Not a valid day";
      break;
  }
  return dayName;
}
console.log(getDayName(9));

// Functions expressions

// 1.
// ES6 or Arrow function: const greetings = () => {};
// Function expression:
const greetings = function () {
  return "Hello, World!";
};

console.log(greetings());

const squareExpression = function (num) {
  return num * num;
};
console.log(squareExpression(2));

const getDayNameExpression = function (dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Not a valid day";
      break;
  }
  return dayName;
};
console.log(getDayNameExpression(3));
