import React from "react";
import { Navbar, Icon, NavItem } from 'react-materialize';
function Nav() {
  return (
    <Navbar
    alignLinks="right"
    brand={<a className="brand-logo" href="#">KC Cleanup</a>}
    menuIcon={<Icon>menu</Icon>}
    options={{
      draggable: true,
      edge: 'left',
      inDuration: 250,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 200,
      preventScrolling: true
    }}
    sidenav={<li>Custom node!</li>}
  >
    <NavItem href="/">
      Getting started
    </NavItem>
    <NavItem href="/">
      Components
    </NavItem>
  </Navbar>
  );
}

export default Nav;
