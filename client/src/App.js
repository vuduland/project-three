import React, { Component } from 'react';
import GoogleApiWrapper from './components/DisplayMap/DisplayMap';
import FileUpload from "./components/FileUpload";
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        
        <FileUpload />
      </>
      
    );
  }
}

export { App };
