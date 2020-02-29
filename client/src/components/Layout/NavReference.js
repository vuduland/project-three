import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import PinContext from '../../context/pin/pinContext'

const Nav = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const pinContext = useContext(PinContext);
  
  return (
    <div className='navbar bg-primary sticky-top'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  );
};
Nav.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};
Nav.defaultProps = {
  title: 'KC Cleanup',
  icon: 'fas fa-id-card-alt'
};

export default Nav;
