// Delcaration of a function
// Declaring a functin can be done with or without parameters.
// Parameters are variables that are used to pass values to the function.
// A function can have multiple parameters.

function greet(greeting) {
  const message = `${greeting} World`;
  const message2 = greeting + " World";
  console.log(message);
}

// Calling a function
// A function is called by using its name followed by parentheses.
// If the function has parameters, the values to be passed to the function are placed inside the parentheses.
// The values passed to the function are called arguments.
greet("Hello");
greet("Hi");
greet("Good Morning");
greet("Good Afternoon");

// We can use the ES5 syntax or the ES6 syntax (also called arrow function) to declare a function:
// ES5 syntax => function greet(){}
// ES6 => const greetings = () => {};
