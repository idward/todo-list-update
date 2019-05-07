import * as ActionTypes from "./actionTypes";

export const changeTodoStatus = id => {
  return {
    type: ActionTypes.CHANGE_STATUS,
    id
  };
};

export const toggleTodoStatus = status => {
  if (status === 'showCompleted') {
    return {type: ActionTypes.SHOW_COMPLETED_TASK};
  }
  return {type: ActionTypes.SHOW_ALL_TASK};
}

export const addNewTodo = todo => {
  return {
    type: ActionTypes.ADD_TODO,
    todo
  };
};

export const updateTodo = (id, value) => {
  return {
    type: ActionTypes.MODIFY_TODO,
    id,
    value
  };
};

export const removeTodo = id => {
  return {
    type: ActionTypes.REMOVE_TODO,
    id
  };
};

export const reorderItems = ({start, end}) => {
  return {
    type: ActionTypes.REORDER_ITEMS,
    start,
    end
  };
};

export const searchTodoItems = (key) => {
  return {
    type: ActionTypes.SEARCH_TODOS,
    key
  };
};

export const userLogin = () => {
  return {
    type: ActionTypes.LOGGED_IN
  }
}