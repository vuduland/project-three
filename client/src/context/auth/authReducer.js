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

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      //token that we get back inside of localstorage; it is from action.payload.token
      localStorage.setitem('token', action.payload.token);
      return {
        ...state, // passing action down to the component
        ...action.payload, // token
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
      // remove token from storage on failed registration
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload // from AuthState dispatch({ payload: err.response.data.msg})
      };
    default:
      return state;
  }
};
