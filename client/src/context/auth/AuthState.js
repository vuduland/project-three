/** @format */
// the state files are where "actions" come from
import React, { useReducer } from 'react'; // to have access to state and also dispatch, to dispatch to our reducer
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
  // USER_LOADED,
  // AUTH_ERROR,
  // LOGIN_SUCCESS,
  // LOGIN_FAIL,
  // LOGOUT,
  // CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState); // state allows access to anything in our state; dispatch allows us to dispatch objects to the reducer
  // LOAD USER
  const loadUser = () => console.log('loadUser');
  // REGISTER USER
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/users', formData, config);
      // this is the route defined in api/users. data is posted there?

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data // res.data === token
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg // we defined this error in an if/else statement in api/users
      });
      //then we handle these successes or failures inside our authReducer
    }
  };
  // LOGIN USER
  const login = () => console.log('login');

  // LOGOUT
  const logout = () => console.log('logout');
  // CLEAR ERRORS
  const clearErrors = () => console.log('clearErrors');
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: null,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register, // here down are methods (functions)
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
