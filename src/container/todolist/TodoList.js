import React, {Component} from "react";
import {connect} from "react-redux";
import {debounce} from "throttle-debounce";
import * as ActionCreators from "../../store/actions";
import todoSelector from '../../selectors/selector';

import AddTodo from "../addTodo/AddTodo";
import Todo from "../../components/todo/Todo";
import TodoWidget from "../../components/todo-widget/TodoWidget";
import TodoStat from "../../components/todoStat/TodoStat";
import Search from "../../components/search/Search";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ''
    };

    this.autoCompleteSearchDebounced = debounce(500, this.getSearchResult);
  }

  changeStatusHandler = todoId => {
    this.props.changeStatus(todoId);
  };

  addTodoHandler = value => {
    if (this.props.todos.length === 0) {
      this.setState({todoStatus: "showAll"});
    }
    const newTodo = {title: value.trim(), completed: false};
    this.props.addTodo(newTodo);
  };

  removeTodoHandler = todoId => {
    this.props.removeTodo(todoId);
  };

  updateTodoHandler = (id, value) => {
    this.props.updateTodo(id, value);
  };

  toggleTaskStatusHandler = status => {
    this.props.toggleTodos(status);
    this.getSearchResult('');
    this.setState({searchKey: ''});
  };

  reorderItemHandler = ({start, end}) => {
    start = parseInt(start);
    end = parseInt(end);

    const reorderIsCorrect = !isNaN(start) && !isNaN(end) && start !== end;
    if (reorderIsCorrect) {
      this.props.reorderItems({start, end});
    }
  };

  searchHandler = e => {
    this.setState({searchKey: e.target.value}, () => {
      this.autoCompleteSearchDebounced(this.state.searchKey.trim());
    });
  };

  getSearchResult = q => {
    this.props.searchTodos(q);
  };

  render() {
    return (
      <div>
        <AddTodo addTodo={this.addTodoHandler}/>
        <Search search={this.searchHandler} value={this.state.searchKey}/>
        <ul className="list-group">
          {(this.props.todos || []).map((todo, index) => (
            <Todo
              todo={todo}
              key={todo.id}
              id={index}
              reorderItem={this.reorderItemHandler}
              changeStatus={this.changeStatusHandler}
              removeTodo={this.removeTodoHandler}
              updateTodo={this.updateTodoHandler}
            />
          ))}
        </ul>
        <TodoStat
          totalTask={this.props.todos.length || 0}
          finishedTask={
            this.props.todos.filter(todo => todo.completed).length || 0
          }
        />
        <TodoWidget
          enabledAllTaskStatus={this.props.todos.length > 0}
          enabledCompletedTaskStatus={
            this.props.todos.length > 0 &&
            this.props.todos.filter(todo => todo.completed).length > 0
          }
          toggleTaskStatus={this.toggleTaskStatusHandler}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    todos: todoSelector(state)
  }),
  dispatch => ({
    searchTodos: key => dispatch(ActionCreators.searchTodoItems(key)),
    changeStatus: id => dispatch(ActionCreators.changeTodoStatus(id)),
    toggleTodos: status => dispatch(ActionCreators.toggleTodoStatus(status)),
    addTodo: todo => dispatch(ActionCreators.addNewTodo(todo)),
    updateTodo: (id, value) => dispatch(ActionCreators.updateTodo(id, value)),
    removeTodo: id => dispatch(ActionCreators.removeTodo(id)),
    reorderItems: position => dispatch(ActionCreators.reorderItems(position))
  })
)(TodoList);
