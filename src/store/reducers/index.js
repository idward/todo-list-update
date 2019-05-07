import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import {reducer as formReducer} from 'redux-form';
import todoReducer from "./todos.reducer";
import todoStatusReducer from "./todoStatus.reducer";
import searchTodosReducer from "./search.reducer";
import authReducer from './auth.reducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  todos: todoReducer,
  todoStatus: todoStatusReducer,
  searchKey: searchTodosReducer,
  auth: authReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
