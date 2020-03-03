import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Nav = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearContacts } = contactContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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

// import React from 'react';
// import { Navbar, Icon, NavItem } from 'react-materialize';
// function Nav() {
//   return (
//     <Navbar
//       alignLinks='right'
//       brand={
//         <a className='brand-logo' href='/'>
//           KC Cleanup
//         </a>
//       }
//       menuIcon={<Icon>menu</Icon>}
//       options={{
//         draggable: true,
//         edge: 'left',
//         inDuration: 250,
//         onCloseEnd: null,
//         onCloseStart: null,
//         onOpenEnd: null,
//         onOpenStart: null,
//         outDuration: 200,
//         preventScrolling: false
//       }}
//       sidenav={<li>Custom node!</li>}
//     >
//       <NavItem href='/'>Getting started</NavItem>
//       <NavItem href='/'>Components</NavItem>
//     </Navbar>
//   );
// }

// export default Nav;
