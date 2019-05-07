import * as ActionTypes from '../actions/actionTypes';

const searchTodosReducer = (state = '', action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_TODOS:
      return action.key;
    default:
      return state;
  }
}

export default searchTodosReducer;