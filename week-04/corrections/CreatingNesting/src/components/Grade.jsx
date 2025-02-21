function Grade({ gpa }) {
  let grade;
  if (gpa >= 97) {
    grade = "A+";
  } else if (gpa >= 93) {
    grade = "A";
  } else if (gpa >= 90) {
    grade = "A-";
  } else if (gpa >= 87) {
    grade = "B+";
  } else if (gpa >= 83) {
    grade = "B";
  } else if (gpa >= 80) {
    grade = "B-";
  } else if (gpa >= 77) {
    grade = "C+";
  } else if (gpa >= 73) {
    grade = "C";
  } else if (gpa >= 70) {
    grade = "C-";
  } else if (gpa >= 67) {
    grade = "D+";
  } else if (gpa >= 63) {
    grade = "D";
  } else if (gpa >= 60) {
    grade = "D-";
  } else {
    grade = "F";
  }
  return <p> Grade: {grade}</p>;
}

export default Grade;
