import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    todoValue: ""
  };

  render() {
    return (
      <div className="float-right" style={{ marginRight: "10px" }}>
        <input
          type="text"
          value={this.state.todoValue}
          onChange={e => this.setState({ todoValue: e.target.value })}
        />
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            this.props.addTodo(this.state.todoValue || "nothing to do");
            this.setState({ todoValue: "" });
          }}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default AddTodo;
