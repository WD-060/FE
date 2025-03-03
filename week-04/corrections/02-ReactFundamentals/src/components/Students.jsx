import Student from "./Student";

function Students({ students }) {
  return students.map((student) => <Student key={student.id} student={student} />);
}

export default Students;
