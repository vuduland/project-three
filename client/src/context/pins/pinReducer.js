/** @format */

import {
  GET_PINS,
  ADD_PIN,
  DELETE_PIN,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PIN,
  FILTER_PINS,
  CLEAR_FILTER,
  PIN_ERROR,
  // CLEAR_PINS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PINS:
      return {
        ...state,
        pins: action.payload,
        loading: false,
      };
    case ADD_PIN:
      return {
        ...state, // current state
        pins: [...state.pins, action.payload], // state is immutable but the spread operator allows us to update our state
        loading: false,
      };
    case DELETE_PIN:
      return {
        ...state, // current state
        pins: state.pins.filter(pin => pin.id !== action.payload), // state.pins === current pins array; filer(...) is all pins that are not in this id; action.payload is sent in the PinItem component
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_PIN:
      return {
        ...state,
        pins: state.pins.map(pin =>
          pin.id === action.payload.id ? action.payload : pin
        ),
        loading: false,
      };
    case FILTER_PINS:
      return {
        ...state,
        filtered: state.pins.filter(pin => {
          const regex = new RegExp(`${action.payload}`, 'gi'); // regex === Regular expression; gi === global insensitive (case)
          return pin.name.match(regex) || pin.email.match(regex);
        }), // High order array method, like map and match
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case PIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
