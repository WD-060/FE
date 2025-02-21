import Address from "./Address";

function Student(props) {
  //   const name = "John Doe";
  //   const age = 25;
  console.log(props);
  return (
    <div>
      <h2>Student</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      {/* <Address city={props.city} state={props.state} /> */}
    </div>
  );
}

export default Student;
