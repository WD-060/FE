const students = [
  { name: "Anna", age: 12 },
  { name: "Peter", age: 15 },
  { name: "Emma", age: 10 },
];

const strArray = ["Anna", "Peter", "Emma"];

strArray.pop();
strArray.push("John");

const greeting = (callback) => {
  return callback();
};
// console.log(greeting("Good Morning"));

const goodMorning = () => {
  return `Good Morning John`;
};

const goodAfternoon = () => {
  return `Good Afternoon John`;
};

// console.log(greeting(goodMorning));
// console.log(greeting(goodAfternoon));

// for (let i = 0; i < strArray.length; i++) {
//   console.log(strArray[i]);
// }

// forEach
// strArray.forEach((item) => {
//     console.log(`Hello ${item}`);
// });

// students.forEach((student) =>{
//     console.log(`Hello ${student.name}`);
// })

// map
// students.map((student) => {
//   console.log(`Hello ${student.name}`);
// });

// filter
students
  .filter((student) => student.age > 12)
  .map((student) => console.log(`Hello ${student.name}`));
