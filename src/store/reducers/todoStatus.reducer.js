import * as ActionTypes from '../actions/actionTypes';

const todoStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_ALL_TASK:
      return Object.assign({}, {status: 'SHOW_ALL'});
    case ActionTypes.SHOW_COMPLETED_TASK:
      return Object.assign({}, {status: 'SHOW_COMPLETED'});
    default:
      return state;
  }
}

export default todoStatusReducer;