import React, { useContext, useRef, useEffect } from 'react';
import PinContext from '../../context/pin/pinContext';

const PinFilter = () => {
  const pinContext = useContext(PinContext);
  const text = useRef('');

  const { filterPins, clearFilter, filtered } = pinContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterPins(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
 <div classname = "d-none d-block">
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Enter trash to the left'
        onChange={onChange}
      />
    </form>
    </div>
  );
};

export default PinFilter;
