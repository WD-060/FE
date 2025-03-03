import { Link } from 'react-router-dom';

function StudentLink({student}) {
  return (
    <li><Link to={`/students/${student.id}`}>{student.name}</Link></li>
  )
}

export default StudentLink;