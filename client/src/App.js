/** @format */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoogleApiWrapper from './components/DisplayMap/DisplayMap';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AuthState from './context/auth/AuthState';
import PinState from './context/pin/PinState';
import AlertState from './context/alert/AlertState';
import './App.css';
const App = () => {
  return (
    <AuthState>
      <PinState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar /> {/* Navbar */}
              {/* div with switch case and links */}
              <div className='container'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
              <GoogleApiWrapper />
            </Fragment>
          </Router>
        </AlertState>
      </PinState>
    </AuthState>
  );
};
export default App;









