import React from "react";

const TodoWidget = props => {
  return (
    <div style={{ marginTop: "20px" }}>
      <button
        disabled={!props.enabledAllTaskStatus}
        className="btn btn-primary btn-sm"
        onClick={() => props.toggleTaskStatus("showAll")}
      >
        Show All Tasks
      </button>
      <button
        disabled={!props.enabledCompletedTaskStatus}
        className="btn btn-primary btn-sm"
        onClick={() => props.toggleTaskStatus("showCompleted")}
      >
        Show Completed Tasks
      </button>
    </div>
  );
};

export default TodoWidget;
