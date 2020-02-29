/** @format */

import React, { useReducer } from 'react'; // to have access to state and also dispatch, to dispatch to our reducer
import axios from 'axios';
import uuid from 'uuid'; // to work with hard coded dummy data, foorrrrrr nowwwwww
import PinContext from './pinContext';
import pinReducer from './pinReducer';
import {
  GET_PINS,
  ADD_PIN,
  DELETE_PIN,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PIN,
  FILTER_PINS,
  CLEAR_PINS,
  CLEAR_FILTER,
  PIN_ERROR,
} from '../types';

const PinState = props => {
  // const initialState = {
  //   // pins: [
  //   //   // can access in Pins component
  //   //   {
  //   //     id: 1,
  //   //     name: 'Jill Johnson',
  //   //     email: 'jill@gmail.com',
  //   //     phone: '111-111-1111',
  //   //     type: 'personal',
  //   //   },
  //   //   {
  //   //     id: 2,
  //   //     name: 'Rico Quintanilla',
  //   //     email: 'jaycoquin@gmail.com',
  //   //     phone: '111-111-2222',
  //   //     type: 'personal',
  //   //   },
  //   //   {
  //   //     id: 3,
  //   //     name: 'Delia Bouhan',
  //   //     email: 'did.good.work@gmail.com',
  //   //     phone: '111-111-3333',
  //   //     type: 'professional',
  //   //   },
  //   // ],
  //   current: null,
  //   filtered: null, // will be an array of filtered pins that match the input
  // };

  const initialState = {
    pins: null,
    current: null,
    filtered: null, // will be an array of filtered pins that match the input
    error: null,
  };

  // state allows access to anything in our state; dispatch allows us to dispatch objects to the reducer
  const [state, dispatch] = useReducer(pinReducer, initialState);

  // Get Pins
  const getPins = async () => {
    try {
      const res = await axios.get('/api/pins');

      dispatch({
        type: GET_PINS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PIN_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add Pin
  const addPin = async pin => {
    // pin.id = uuid.v4();
    try {
      const res = await axios.post('/api/pins', pin);

      dispatch({ type: ADD_PIN, payload: pin }); // dispatch to our reducer
    } catch (err) {
      dispatch({ type: PIN_ERROR, paylod: err.response.msg });
    }
  };

  // Delete Pin
  const deletePin = id => {
    dispatch({ type: DELETE_PIN, payload: id }); // dispatch to our reducer
  };

  // Set Current Pin
  const setCurrent = pin => {
    dispatch({ type: SET_CURRENT, payload: pin }); // dispatch to our reducer
  };

  // Clear Current Pin
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT }); // dispatch to our reducer
  };

  // Update Pin
  const updatePin = pin => {
    dispatch({ type: UPDATE_PIN, payload: pin }); // dispatch to our reducer
  };

  // Filter Pins
  const filterPins = text => {
    dispatch({ type: FILTER_PINS, payload: text }); // dispatch to our reducer
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER }); // dispatch to our reducer
  };

  return (
    <PinContext.Provider
      value={{
        pins: state.pins,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addPin, // whenever we need to access anything from a component through our context we need to add/call it here. if we reload it's just added to memory, not DB
        deletePin,
        setCurrent,
        clearCurrent,
        updatePin,
        filterPins,
        clearFilter,
      }}>
      {props.children}
    </PinContext.Provider>
  );
};

export default PinState;
