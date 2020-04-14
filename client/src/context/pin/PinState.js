import React, { useReducer } from 'react';
import axios from 'axios';
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

const PinState = (props) => {
  const initialState = {
    pins: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(pinReducer, initialState);
  // const [state, UPDATE_PIN] = useState()
  // const [state] = useState('0');
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
  const addPin = async (pin) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/pins', pin, config);

      dispatch({
        type: ADD_PIN,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PIN_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Delete Pin
  const deletePin = async (id) => {
    try {
      await axios.delete(`/api/pins/${id}`);

      dispatch({
        type: DELETE_PIN,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: PIN_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Update Pin
  const updatePin = async (pin) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(`/api/pins/${pin._id}`, pin, config);

      dispatch({
        type: UPDATE_PIN,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PIN_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Clear Pins
  const clearPins = () => {
    dispatch({ type: CLEAR_PINS });
  };

  // Set Current Pin
  const setCurrent = (pin) => {
    dispatch({ type: SET_CURRENT, payload: pin });
  };

  // Clear Current Pin
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Pins
  const filterPins = (text) => {
    dispatch({ type: FILTER_PINS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <PinContext.Provider
      value={{
        pins: state.pins,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addPin,
        deletePin,
        setCurrent,
        clearCurrent,
        updatePin,
        filterPins,
        clearFilter,
        getPins,
        clearPins,
      }}>
      {props.children}
    </PinContext.Provider>
  );
};

export default PinState;
