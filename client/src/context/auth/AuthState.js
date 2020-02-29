// the state files are where "actions" come from
import React, { useReducer } from 'react'; // to have access to state and also dispatch, to dispatch to our reducer
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
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

  const loadUser = async () => {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get('/api/auth');

      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };


  // REGISTER USER
  const register = async formData => {

    try {
      const res = await axios.post('/api/users', formData);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // LOGIN USER
  const login = async formData => {

    try {
      const res = await axios.post('/api/auth', formData);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      console.log(
        `${res.data} === res.data \n  ${LOGIN_SUCCESS} === LOGIN_SUCCESS \n ${res} === res`
      );

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
      // console.log(err.response.data.msg + '\n err.response.data.msg');
    }
  };

  // LOGOUT
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
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
