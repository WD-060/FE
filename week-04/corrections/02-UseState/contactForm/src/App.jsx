import { useState } from 'react';
import './App.css';
import FormSingleStates from './components/FormSingleStates';
import FormObjectState from './components/FormObjectState';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // console.log('single state', name, email, phone, message);
  console.log('formData', formData);
  return (
    <>
      {/* <FormSingleStates
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        message={message}
        setMessage={setMessage}
      /> */}
      <FormObjectState formData={formData} setFormData={setFormData} />
    </>
  );
}

export default App;
