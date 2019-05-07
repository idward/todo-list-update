import React, { Component } from "react";
import classnames from "classnames";

class Todo extends Component {
  state = {
    editable: false,
    todoValue: this.props.todo.title || "",
    targetItem: null
  };

  editTitle = evt => {
    if (evt.key === "Enter") {
      this.updateTitleAndToggleStatus();
    }
  };

  updateTitleAndToggleStatus = () => {
    this.props.updateTodo(this.props.todo.id, this.state.todoValue);
    this.setState({ editable: false });
  };

  onDragStartHandler = e => {
    e.dataTransfer.setData("text", e.target.id);
    this.setState({ targeItem: true });
  };

  onDragOverHandler = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  onDragEndHandler = e => {
    this.setState({ targetItem: null });
  };

  onDropHandler = e => {
    const droppedItemId = e.currentTarget.id;
    this.props.reorderItem({
      start: e.dataTransfer.getData("text"),
      end: droppedItemId
    });
    e.dataTransfer.clearData();
  };

  render() {
    const { id, todo, changeStatus, removeTodo } = this.props;
    return (
      <li
        className="list-group-item"
        draggable="true"
        id={id}
        onDragStart={this.onDragStartHandler}
        onDragOver={this.onDragOverHandler}
        onDragEnd={this.onDragEndHandler}
        onDrop={this.onDropHandler}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => changeStatus(todo.id)}
        />
        {this.state.editable ? (
          <input
            type="text"
            value={this.state.todoValue}
            name="title"
            onChange={e => this.setState({ todoValue: e.target.value })}
            onKeyPress={this.editTitle}
            onBlur={this.updateTitleAndToggleStatus}
          />
        ) : (
          <span onClick={() => this.setState({ editable: true })}>
            {todo.title}
          </span>
        )}
        <span
          className={classnames({
            badge: true,
            "badge-danger": !todo.completed,
            "badge-success": todo.completed
          })}
        >
          {todo.completed ? "Done" : "UnCompleted"}
        </span>
        <button
          className="btn btn-primary btn-sm float-right"
          onClick={() => removeTodo(todo.id)}
        >
          Remove
        </button>
      </li>
    );
  }
}

export default Todo;
