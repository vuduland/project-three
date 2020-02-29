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
  CLEAR_PINS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PINS:
      return {
        ...state,
        pins: action.payload,
        loading: false
      };
    case ADD_PIN:
      return {
        ...state,
        pins: [action.payload, ...state.pins],
        loading: false
      };
    case UPDATE_PIN:
      return {
        ...state,
        pins: state.pins.map(pin =>
          pin._id === action.payload._id ? action.payload : pin
        ),
        loading: false
      };
    case DELETE_PIN:
      return {
        ...state,
        pins: state.pins.filter(
          pin => pin._id !== action.payload
        ),
        loading: false
      };
    case CLEAR_PINS:
      return {
        ...state,
        pins: null,
        filtered: null,
        error: null,
        current: null
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_PINS:
      return {
        ...state,
        filtered: state.pins.filter(pin => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return pin.name.match(regex) || pin.email.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case PIN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
