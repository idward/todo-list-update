import * as ActionType from "../actions/actionTypes";
const initialState = [
  { id: "1001", title: "Go Shopping", completed: false },
  { id: "1002", title: "See Movie", completed: false }
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      const newTodo = action.todo;
      const ids = state.map(item => item.id);
      if (ids.length === 0) {
        ids[0] = "1000";
      }
      newTodo.id = (Math.max(...ids) + 1).toString();
      return [...state, newTodo];
    case ActionType.MODIFY_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.title = action.value;
        }
        return todo;
      });
    case ActionType.REMOVE_TODO:
      return state.filter(item => {
        return item.id !== action.id;
      });
    case ActionType.REORDER_ITEMS:
      const { end: nextPosIndex, start: currPosIndex } = action;
      const element = state[currPosIndex];
      let dashboardItems = [
        ...state.slice(0, currPosIndex),
        ...state.slice(currPosIndex + 1)
      ];

      dashboardItems.splice(nextPosIndex, 0, element);

      return dashboardItems;
    case ActionType.CHANGE_STATUS:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todosReducer;
