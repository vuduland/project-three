import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoogleApiWrapper from './components/DisplayMap/DisplayMap';
import Nav from './components/Nav/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => {

    return (
        <Router>
          <Fragment>
            <Nav /> {/* Navbar */}
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
    );
  };

export default App;
