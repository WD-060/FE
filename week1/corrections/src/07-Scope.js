// global scope and local scope/function scope
var myVar = "Globar var";
console.log("Global scope", myVar);

function testVar() {
  var myVar = "Local var";
  console.log("Function scope", myVar);
}
console.log("Global scope", myVar);
testVar();

// global scope and block
const name = "John";
console.log("Global scope", name);

let age = 30;
console.log("Global scope", age);

var myVar = "Re-declared";
console.log("Global scope", myVar);

if (true) {
  var myVar = "Local var";
  const name = "Jane";
  let age = 25;
  console.log("block scope", myVar);
  console.log("block scope", name);
  console.log("block scope", age);
}

console.log("Global scope", myVar);
console.log("Global scope", name);
console.log("Global scope", age);

const array = [1, 2, 3];    