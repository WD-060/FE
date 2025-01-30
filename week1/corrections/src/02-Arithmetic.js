// Task 1:
let num = 5;
let strNum = "5";

// 1: Addition
console.log(num);
console.log(strNum);
console.log(num + strNum); // concatenation
console.log(`${num}${strNum}`);
console.log(num + num); // addition

// 2. Susbstraction
console.log("Substraction", num - strNum); // substraction

// 3. Multiplication
console.log("Multiplication", num * strNum); // multiplication

// 4. Division
console.log("Division", num / strNum); // division

// 5. Modulus
console.log("Modulus", num % strNum); // modulus

if(num % 2 === 0) {
  console.log("Even");
}
// 6. Exponential
console.log("Exponential", num ** 2); // exponential