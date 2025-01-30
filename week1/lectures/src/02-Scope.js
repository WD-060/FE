// Scope is the context in which a variable is declared.
// It defines the visibility and accessibility of a variable.
// There are two types of scope:
// - Global scope: variables declared in the root of the file.
const globalVariable = "I'm a global variable";
// - Block scope: variables declared inside a block of code. A Block is defined by curly braces {}.
if (true) {
  const blockVariable = "I'm a block variable";
  console.log(blockVariable);
  console.log(globalVariable);
}

console.log(globalVariable);
// console.log(blockVariable); // This will throw an error because blockVariable is not defined in the global scope.

// Variables declared with the const and let keywords have block scope.
// Variables declared with the var keyword have function scope. (we DON'T use var anymore, so the function scope is not relevant anymore)
