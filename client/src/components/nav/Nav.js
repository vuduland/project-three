/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = ({ title, icon }) => {
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
