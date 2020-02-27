import React, { useContext, useRef, useEffect } from 'react';
import PinContext from '../../context/contact/contactContext';

const PinFilter = () => {
  const pinContext = useContext(PinContext);
  const text = useRef('');

  const { filterPins, clearFilter, filtered } = contactContext;
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

export default PinFilter;
