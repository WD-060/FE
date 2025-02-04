// Task 1:
const myArray = [42, "Hello, world!", true, 3.14, "JavaScript"];

// Print the array
// console.log(myArray);

//Print each element of the array
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
for (let i = 0; i < myArray.length; i++) {
  //   console.log(myArray[i]);
}
myArray.forEach((item) => console.log(item));
// myArray.map((item) => console.log(item));

// Change the second element of the array
myArray[1] = "Changed element";
// console.log(myArray);

// Task 2:

const numArray = [1, 2, 3, 4, 5];

// Add to the end of the array
const addedNum = [6, 7];
numArray.push(6);
numArray.push(7);
// console.log(numArray);

// Remove the last item
numArray.pop();
// console.log(numArray);

// Remove the first item
numArray.shift();
// console.log(numArray);

// Add to the beginning of the array
numArray.unshift(0);
// console.log(numArray);

// Task 3:
numArray.reverse();
// console.log(numArray);

const reversedArray = numArray.toReversed();
// console.log(reversedArray);

// Task 4:

numArray.splice(2, 1, 35, 36);
console.log(numArray);

const toSplicedArray = numArray.toSpliced(1, 1, "b", "c");
console.log(toSplicedArray);
console.log(numArray);

// Task 5:

const newArray = numArray.slice(1, 4);
console.log(newArray);
console.log(numArray);

// Task 6:
const stringArray = ["Hello", "world", "JavaScript", "is", "awesome"];
const joinedArray = stringArray.join("-");
console.log(joinedArray);

// Task 7:
const persons = [
  {
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    name: "Jane",
    age: 25,
    city: "Los Angeles",
  },
  {
    name: "Jack",
    age: 40,
    city: "Chicago",
  },
];
//for...of
for (const item of persons) {
  console.log(`Name: ${item.name}, Age: ${item.age}, City: ${item.city}`);
}
