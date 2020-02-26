import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload]; // returning array directly ( any other alerts inside the array); action.payload is the alert that gets sent )
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== action.payload); // remove specific alert by id after 5 seconds or whatever is in timeout of AlertState
    default:
      return state;
  }
};
