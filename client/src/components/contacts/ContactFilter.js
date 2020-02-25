import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { filterContacts, clearFilter, filtered } = contactContext;
  useEffect(() => {
    if (filtered === null) {
      // if it's not filtered the text displays nothing
      // we can access this because we used useRef
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div>
      <form>
        <input
          ref={text}
          type='text'
          placeholder='Filer Contacts...'
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default ContactFilter;
