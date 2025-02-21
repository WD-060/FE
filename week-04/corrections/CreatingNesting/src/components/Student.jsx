import Grade from "./Grade";

function Student(props) {
  const {
    student: { firstName, lastName, age, course, city, picture },
  } = props;
  console.log(props);
  return (
    <div>
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div>
        <h2>{`${firstName} ${lastName}`}</h2>
        <p>Age: {age} </p>
        <p>Course: {course}</p>
        <p>City: {city}</p>
        <Grade gpa={props.student.gpa} />
      </div>
    </div>
  );
}

export default Student;
