// https://www.codewars.com/kata/5ad0d8356165e63c140014d4

// Create a function with two parameters exameScore and projects

// I need to check that the examScore is between 0 and 100
// I need to check that the projects >= 0

// Conditional statement to check the exameScore and projects

// If exameScore > 90 OR projects > 10 return 100
// If exameScore > 75 AND projects >= 5 return 90
// If exameScore > 50 AND projects >= 2 return 75
// In any other case return 0

// Return the final grade

const finalGrade = (exameScore, projects) => {
    let finalGrade;
    if(exameScore < 0 || exameScore > 100 || projects < 0) {
        return "You have entered an invalid score or number of projects";
    };

    if(exameScore > 90 || projects > 10) {
        finalGrade = 100;
    } else if(exameScore > 75 && projects >= 5) {
        finalGrade = 90;
    } else if( exameScore > 50 && projects >= 2) {
        finalGrade = 75;
    } else {
        finalGrade = 0;
    }
    return finalGrade;
};

console.log(finalGrade(100, 12)); // 100
console.log(finalGrade(99, 0)); // 100
console.log(finalGrade(10, 15)); // 100
console.log(finalGrade(-1, 15)); // 100

