import * as ActionTypes from '../actions/actionTypes';

const initialState = {isLoggedIn: false};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGGED_IN:
      return {...state, isLoggedIn: true};
    case ActionTypes.LOGGED_OUT:
      return {...state, isLoggedIn: false};
    default:
      return state;
  }
}

export default authReducer;