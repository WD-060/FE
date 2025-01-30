// Variables are containers that store values that need to be used across a program
// DECLARING a variable means that you are creating it in the program

// To declare a variable you need to use the keywords const or let:
// Const creates variables that remain constant in value across the program
// Let creates variables that will be able to reasing its value if necesary

// Variables can store any type of data. There are two manin types depending on their complexity:
// Primitive data type -> strings, numbers, boleans, symbols, null and undefine
// Complex data types (Objects) -> Arrays, Object Literals and Functions

// Let's see now the primitive data types
// Strings => text between quotation marks
const firstName = "Maria"; // uses double quotations
const lastName1 = "Blanco"; // uses single quotations, which work the same as double quotations
const introduction = "I'm Maria"; // In cases of sentences with an apostrophe then use double quotations to avoid the string been cut on the apostrophe
const lastName2 = `Canal`; // uses back ticks (they work as the others, but allow injecting variables inside)
let birthYear = "1993";

console.log(firstName);
console.log(lastName1);
console.log(lastName2);
console.log(introduction);
console.log(birthYear);

// Numbers => they are written without any quotations, otherwise they would be strings
let age = 23;
console.log(age);

// boleans => there are only two values, true and false
let isStudent = true;
console.log(isStudent);

let isTeacher = false;
console.log(isTeacher);

// null => indicates that the value is empty and it is intentionally assigned
let name = null;
console.log(name);

// undefine => indicates that the value is empty, and it is normally not intentional but the result
// of a let variable that has been created but its value has not been assigned yet
let greeting;
console.log(greeting);

// It's important to note that withing javascript we have values that can be truthy or falsy, which can be helpful when doing comparisons:
// Falsy values -> false, 0, null, undefined, "" (empty string)
// Truthy values -> true, string, numbers that aren't 0, arrays and objects
