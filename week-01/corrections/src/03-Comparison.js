// Task Comparison:
// 1.
// == => simple equality (value)
console.log(5 == "5"); // true
// != => simple inequality (value)
console.log(5 != "5"); // false
console.log(5 != 9); // true
console.log(9 != "5"); // true

// === => strict equality (value and type)
console.log(5 === "5"); // false
// !== =>  strict inequality (value and type)
console.log(5 !== "5"); // true
console.log(5 !== 9); // true
console.log(9 !== "5"); // true

// 2.
console.log(10 === "10"); // false
console.log(10 == "10"); // true

// < => less than
console.log("5 < 10", 5 < 10); // true
console.log("5 <= 10", 5 <= 10); // true
console.log("10 < 20 num", 10 < 20); // true
console.log("10 <= 20 num", 10 <= 20); // true
console.log("10 < 20 mix", "10" < 20); // true
console.log("10 <= 20 mix", "10" <= 20); // true
console.log("10 < 20 str", "10" < "20"); // true
console.log("10 <= 20 str", "10" <= "20"); // true

// > => greater than
console.log("5 < 10", 5 > 10); // false
console.log("5 > 10", 5 >= 10); // false


