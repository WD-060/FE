function Student({
  student: { firstName, lastName, city, age, gpa, id, picture, course },
}) {
  return (
    <div>
      <img src="picture" alt="name" />
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{age}</p>
      <p>{course}</p>
      <p>{city}</p>
      <p>{gpa}</p>
    </div>
  );
}

export default Student;
