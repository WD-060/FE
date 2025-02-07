// Task 1:
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => console.log(num));

let sum = 0;
// numbers.forEach((num) => sum = sum + num );
numbers.forEach((num) => (sum += num));
console.log("sum", sum);

const squaredNumbers = [];
numbers.forEach((num) => squaredNumbers.push(num * num));
console.log("squaredNumbers", squaredNumbers);

const squaredNumbers2 = numbers.map((num) => num * num);
console.log("squaredNumbers2", squaredNumbers2);

// Task 2:

const doubledNumbers = numbers.map((num) => num * 2);
console.log("doubledNumbers", doubledNumbers);

const stringNumbers = numbers.map((num) => `Number: ${num}`);
console.log("stringNumbers", stringNumbers);

const numberObjects = numbers.map((num) => ({
  original: num,
  squared: num * num,
}));

// Task 3:
const integers = [10, 20, 30, 40, 50];

const greater25 = integers.find((num) => num > 25);
console.log("greater25", greater25);

const greater15filtered = integers.filter((num) => num > 15);
console.log("greater25filtered", greater15filtered);

const people = [
  { name: "Alice", age: 25, grade: 85 },
  { name: "Bob", age: 30, grade: 92 },
  { name: "Charlie", age: 35, grade: 78 },
  { name: "David", age: 40, grade: 88 },
  { name: "Eve", age: 25, grade: 95 },
];

const nameCharlie = people.find(
  (person) => person.name.toLowerCase() === "charlie"
);
console.log("nameCharlie", nameCharlie);

const nameCharlieDes = people.find(
  ({ name }) => name.toLowerCase() === "charlie"
);
console.log("nameCharlieDes", nameCharlieDes);

const studentsAbove80 = people.filter((person) => person.grade > 80);
console.log("studentsAbove80", studentsAbove80);

const studentsAbove80Des = people.filter(({ grade }) => grade > 80);
console.log("studentsAbove80", studentsAbove80);

// Task 5:

const numbers2 = [4, 8, 15, 16, 23, 42];

const hasGreaterThan20 = numbers2.some((num) => num > 20);
console.log("hasGreaterThan20", hasGreaterThan20);

const allGreaterThan50 = numbers2.every((num) => num > 50);
console.log("allGreaterThan50", allGreaterThan50);

const students = [
  { name: "Alice", age: 25, passed: true },
  { name: "Bob", age: 30, passed: false },
  { name: "Charlie", age: 35, passed: true },
  { name: "David", age: 40, passed: true },
];

const somePassed = students.some((student) => student.passed === true);
console.log("somePassed", somePassed);

const someFailed = students.some((student) => student.passed === false);
console.log("someFailed", someFailed);

const allPassed = students.every((student) => student.passed === true);
console.log("allPassed", allPassed);

const allFailed = students.every((student) => student.passed === false);
console.log("allFailed", allFailed);

const olderThan18 = students.every((student) => student.age > 18);
console.log("olderThan18", olderThan18);