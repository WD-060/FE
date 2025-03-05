import React from 'react';

function Contact() {
  return (
    <section>
      <h2 className='text-primary text-2xl font-bold'>Contact us</h2>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message'></textarea>
        </div>
        <button type='submit'>Send</button>
      </form>
    </section>
  );
}

export default Contact;
