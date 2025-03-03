import React from 'react';

function FormObjectState({ formData, setFormData }) {
  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validation
    localStorage.setItem('formData', JSON.stringify(formData));
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          onChange={handleFormData}
          value={formData.name}
          type='text'
          id='name'
          name='name'
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          onChange={handleFormData}
          value={formData.email}
          type='email'
          id='email'
          name='email'
        />
      </div>
      <div>
        <label htmlFor='phone'>Phone</label>
        <input
          onChange={handleFormData}
          value={formData.phone}
          type='tel'
          id='phone'
          name='phone'
        />
      </div>
      <div>
        <label htmlFor='message'>Message</label>
        <textarea
          onChange={handleFormData}
          value={formData.message}
          id='message'
          name='message'
        ></textarea>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default FormObjectState;
