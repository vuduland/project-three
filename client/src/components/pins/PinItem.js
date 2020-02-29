/** @format */

// Allows each individual pin in the list to have its own component
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PinContext from '../../context/pins/pinContext';

const PinItem = ({ pin }) => {
  const pinContext = useContext(PinContext);
  const { deletePin, setCurrent, clearCurrent } = pinContext;

  const { _id, name, email, phone, type } = pin;
  const onDelete = () => {
    deletePin(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }>
          {type.charAt(0).toUpperCase() + type.slice(1)}
          {/* Return only first character of type as uppercase; add rest of type array to end with slice() method */}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone'></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm' onClick={() => setCurrent(pin)}>
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

PinItem.propTypes = {
  pin: PropTypes.object.isRequired,
};

export default PinItem;
