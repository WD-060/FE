//  https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

const countingSheeps = (numOfSheeps) => {
    let sheepArray = []; // creating an empty array to store the sheep
    let result = ""; // creating an empty string to store the result
    // checking if numbOfSheeps is negative or 0 and sending an error message to user
    if(numOfSheeps <= 0) {
        return "You have no sheep!";
    }
    // Add the sheeps to the array
    for(let i = 1; i <= numOfSheeps; i++) {
        sheepArray.push(`${i} sheep...`);
    }
    // Transform the array into a string separated by ...
    result = sheepArray.join("");
    // Return the result
    return result;
};

console.log(countingSheeps(3))