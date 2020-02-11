import React, { Component } from 'react';
import GoogleApiWrapper from './components/Map/Map';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>KC Cleanup Project</h2>
          <GoogleApiWrapper />
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
