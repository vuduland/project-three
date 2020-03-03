import React, { useState, useContext, useEffect } from 'react';
import PinContext from '../../context/pin/pinContext';

const PinForm = () => {
  const pinContext = useContext(PinContext);

  const { addPin, updatePin, clearCurrent, current } = pinContext;

  useEffect(() => {
    if (current !== null) {
      setPin(current);
    } else {
      setPin({
        name: '',
        lat: '',
        lng: '',
        type: 'trash'
      });
    }
  }, [pinContext, current]);

  const [pin, setPin] = useState({
    name: '',
    lat: '',
    lng: '',
    type: 'trash'
  });

  const { name, lat, lng, picUrl, type } = pin;

  const onChange = e =>
    setPin({ ...pin, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addPin(pin);
    } else {
      updatePin(pin);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Pin' : 'Add Pin'}
      </h2>
      <input
        type='text'
        placeholder='Description'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='lat'
        placeholder='lat'
        name='lat'
        value={lat}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='lng'
        name='lng'
        value={lng}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='picUrl'
        name='picUrl'
        value={picUrl}
        onChange={onChange}
      />
      <h5>Pin Type</h5>
      <input
        type='radio'
        name='type'
        value='trash'
        checked={type === 'trash'}
        onChange={onChange}
      />{' '}
      Trash{' '}
      <input
        type='radio'
        name='type'
        value='clean'
        checked={type === 'clean'}
        onChange={onChange}
      />{' '}
      Clean
      <div>
        <input
          type='submit'
          value={current ? 'Update Pin' : 'Add Pin'}
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

export default PinForm;
