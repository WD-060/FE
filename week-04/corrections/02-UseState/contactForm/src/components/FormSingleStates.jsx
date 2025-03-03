function FormSingleStates({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  message,
  setMessage,
}) {
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validation
    const formData = {
      name,
      email,
      phone,
      message,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          onChange={handleChangeName}
          value={name}
          type='text'
          id='name'
          name='name'
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          id='email'
          name='email'
        />
      </div>
      <div>
        <label htmlFor='phone'>Phone</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type='tel'
          id='phone'
          name='phone'
        />
      </div>
      <div>
        <label htmlFor='message'>Message</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          id='message'
          name='message'
        ></textarea>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default FormSingleStates;
