// Simple data type -> strings, numbers, boleans, symbols, null and undefine
// Complex data types (Objects) -> Arrays, Object Literals and Functions

// let strArray = ["Maria", "Daryna", "Alireza"];  NOT RECOMENDED TO DECLARE AND ARRAY WITH LET IN MOST CASES
// strArray = 12

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // declaring an array with numbers
console.log(numArray); // loggin the whole array

console.log(numArray[2]); // logging an item of the array using the index (indexes start at 0)

// length -> returns the length of the array
console.log(numArray.length);

// pop vs push -> they alter the last position of the original array

// pop -> takes away the last item of the array
const popMethod = numArray.pop(); // stores the element taken away from the array in the variable
console.log(numArray); // logs the original array after been altered by the method
console.log(popMethod); // logs the item that was substracted from the array

// push -> inserts a new item in the last position of the array
numArray.push(9);
console.log(numArray);

// shift vs unshift -> they alter the first position of the original array

// shift -> takes away the first item of the array
const shiftMethod = numArray.shift(); //stores the item taken away by the method into the variable
console.log(numArray); // logs the original array after been altered by the method
console.log(shiftMethod); // logs the item that was substracted from the array

// unshift -> inserts a new item in the first position of the array
numArray.unshift(10);
console.log(numArray);

// slice vs splice -> they select a part of the original array HOWEVER

// slice does NOT change the original array, it only creates a copy of the elements selected
// slice needs to pass the start index of the selection
// slice can pass a second index (non-inclusive) to indicate the end of the selection

// numArray.slice(3) => this slice is creating a copy from the item in the fourth position of the array until the last one
const sliceArray = numArray.slice(1, 3); // this slice is creating a copy of the items between index 1(included) and index 3(excluded)
console.log("sliceArray", sliceArray);
console.log("numArray", numArray);

// splice DOES change the original array by substracting a selection of items
// splice must have a start index passed to indicate the begining of the selection
// splice can have a second index (inclusive) passed to indicate where to end the selection
const spliceArray = numArray.splice(1, 3); // this splice is substracting from the original array the items starting from index 1 using 3 items
console.log("spliceArray", spliceArray);
console.log("numArray", numArray);

// toReversed vs reserse -> they reverse the order of the elements in the array

// toReversed does NOT change the original array, it just creates a copy of it with the changes done by the method
const toReversedArray = numArray.toReversed();
console.log("numArray", numArray);
console.log("toReversedArray", toReversedArray);

// reverse DOES change the original array
numArray.reverse();
console.log(numArray);
