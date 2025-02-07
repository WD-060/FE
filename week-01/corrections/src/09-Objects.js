// Task 1
const book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  pages: 234,
  isRead: true,
  summary: () => {
    return `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead}`;
  },
};

console.log(book);
console.log(book.author);
console.log(book.title);
console.log(book.summary());
// book.summary = function(){};
book.year = 1951;
console.log(book);

// function summaryTest (){
//     return `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead}`;
// }
// summaryTest()

// Task 2

const fruits = ["apple", "banana", "cherry", "date"];

console.log(fruits[1]);

const blueberry = fruits[1];

const [fruit1, , fruit3] = fruits;
console.log(fruit3);

// Initial object
const person = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};

const student = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
};
const {
  name,
  address: { city },
} = person;
console.log(name);
// console.log(address);
console.log(city);
const studentsArray = [
  {
    name: "John Doe",
    age: 30,
    address: {
      city: "New York",
      zip: "10001",
    },
  },
  {
    name: "John Doe",
    age: 30,
    address: {
      city: "New York",
      zip: "10001",
    },
  },
];
studentsArray.forEach((student) => {
  const {
    name,
    address: { city, zip },
  } = student;
  console.log(`Name: ${name}, City: ${city}, Zip: ${zip}`);
});

studentsArray.forEach(({ name, address: { city, zip }}) => {
  console.log(`Name: ${name}, City: ${city}, Zip: ${zip}`);
});

// Initial function
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayPerson(person);