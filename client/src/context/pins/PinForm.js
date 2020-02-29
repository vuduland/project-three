/** @format */
// CRUD WORKS FOR PINS
import React, { useState, useContext, useEffect } from 'react'; // useContext is a hook; probably useState as well
import PinContext from '../../context/pins/pinContext';

const PinForm = () => {
  const pinContext = useContext(PinContext); // this should give access to any methods or state

  const { addPin, updatePin, clearCurrent, current } = pinContext;

  useEffect(() => {
    if (current !== null) {
      setPin(current);
    } else {
      setPin({
        // set it to default state
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [pinContext, current]); // only calls useEffect if pinContext or current value is changed; also will get warning if brackets are empty

  const [pin, setPin] = useState({
    // this is all the state of the form
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = pin; // Whenever we change an input in the form, the value of these extracted variables

  const onChange = e => setPin({ ...pin, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (current === null) {
      addPin(pin);
    } else {
      updatePin(pin);
    }
    clearAll();
    // addPin(pin);
    // setPin({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   type: 'personal'
    // });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current ? 'Edit Pin' : 'Add Pin'}</h2>
      <input
        type='text'
        placeholder='name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Pin Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange} // because these are controlled components (defaulted to personal?) we have to add onChange event
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional{' '}
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
