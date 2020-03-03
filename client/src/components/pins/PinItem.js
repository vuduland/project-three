import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PinContext from '../../context/pin/pinContext';

const PinItem = ({ pin }) => {
  const pinContext = useContext(PinContext);
  const { deletePin, setCurrent, clearCurrent } = pinContext;

  const { _id, name, lat, lng, picUrl, type } = pin;

  const onDelete = () => {
    deletePin(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <img className='card-img-top' src={picUrl} alt={name} />
      <div className='card-body'>
        <h3 className='text-primary text-left'>
          {name}{' '}
          <span
            style={{ float: 'right' }}
            className={
              'badge ' + (type === 'trash' ? 'badge-dark' : 'badge-success')
            }
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </h3>
        <ul className='list'>
          {lat && (
            <li>
              <i className='fas fa-compass' /> {lat}
            </li>
          )}
          {lng && (
            <li>
              <i className='fas fa-compass' /> {lng}
            </li>
          )}
        </ul>
        <p>
          <button
            className='btn btn-dark btn-sm'
            onClick={() => setCurrent(pin)}
          >
            Edit
          </button>
          <button className='btn btn-danger btn-sm' onClick={onDelete}>
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

PinItem.propTypes = {
  pin: PropTypes.object.isRequired
};

export default PinItem;
