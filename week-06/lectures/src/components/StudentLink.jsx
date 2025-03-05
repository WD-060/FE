import { Link } from 'react-router-dom';

function StudentLink({student}) {
  return (
    <li className='link link-primary'><Link to={`/students/${student.id}`}>{student.name}</Link></li>
  )
}

export default StudentLink;