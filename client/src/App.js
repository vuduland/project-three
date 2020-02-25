import React, { Component } from 'react';
import GoogleApiWrapper from './components/DisplayMap/DisplayMap';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <GoogleApiWrapper />
      </>
    );
  }
}

export { App };
