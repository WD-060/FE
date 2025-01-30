// Task conditionals
// 1.
const temperature = 20;
if (temperature < 15) {
  console.log("It's cold outside, wear a coat!");
} else {
  console.log("It's warm outside, wear a t-shirt!");
}

if (temperature < 15) {
  console.log("It's cold outside, wear a coat!");
} else if (temperature < 25) {
  console.log("It's warm outside, wear a sweater!");
} else {
  console.log("It's hot outside, wear a t-shirt!");
}

if (temperature < 15) {
  console.log("It's cold outside, wear a coat!");
} else if (temperature > 25) {
  console.log("It's warm outside, wear a t-shirt!");
} else {
  console.log("It's hot outside, wear a sweater!");
}

switch(temperature) {
    case 10:
        console.log("It's cold outside, wear a coat!");
        break;
    case 20:
        console.log("It's warm outside, wear a sweater!");
        break;
    case 30:
        console.log("It's hot outside, wear a t-shirt!");
        break;
    default:
        console.log("I don't know what to wear!");
}
