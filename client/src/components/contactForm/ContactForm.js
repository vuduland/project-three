import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'trash'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'trash'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Mark Clean' : 'Report Trash'}
      </h2>
      <input
        type='text'
        placeholder='comment'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='lat'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='lng'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      {/* <h5>Status</h5>
      <input
        type='radio'
        name='type'
        value='trash'
        checked={type === 'trash'}
        onChange={onChange}
      />{' '}
      Trashed{' '} */}
      {/* <input
        type='radio'
        name='type'
        value='clean'
        checked={type === 'clean'}
        onChange={onChange}
      />{' '}
      Cleaned */}
      <div>
        <input
          type='submit'
          value={current ? 'Do Good' : 'Report'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
