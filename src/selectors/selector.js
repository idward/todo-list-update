import {createSelector} from 'reselect';

const getTodos = state => state.todos;
const getTodosStatus = state => state.todoStatus;
const selectTodos = (todos, todoStatus) => {
  switch (todoStatus.status) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

const selectedTodos = createSelector(
  [getTodos, getTodosStatus],
  selectTodos
);

const getSearchKey = state => state.searchKey;
const searchTodos = (selectedTodos, key) => {
  if(!key || key === ''){
    return selectedTodos;
  } else {
    return selectedTodos.filter(todo => {
      return todo.title.toLowerCase().includes(key);
    });
  }
}

const todoSelector = createSelector(
  [selectedTodos, getSearchKey],
  searchTodos
);

export default todoSelector;