const animals = ["lion", "tiger", "bear", "giraffe", "zebra", "monkey"];

let numberOfAnimals = 0;
for (let i = 0; i < animals.length; i++) {
  numberOfAnimals++;
}
console.log(numberOfAnimals); // 6

// while loop
let countFiveLetters = 0;
let index = 0;
while (index < animals.length) {
  if (animals[index].length >= 5) {
    countFiveLetters++;
  }
  index++;
}
console.log(countFiveLetters); // 3
let countM = 0;
let i = 0;

// Do while loop
do {
  if (animals[i][0].toLowerCase() === "m") {
    countM++;
  }
  i++;
} while (i < animals.length);

console.log(countM); // 1