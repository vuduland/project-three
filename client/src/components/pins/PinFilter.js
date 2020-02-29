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
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Pins...'
        onChange={onChange}
      />
    </form>
  );
};

export default PinFilter;
