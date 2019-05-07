import React from "react";

const TodoStat = props => {
  return (
    <div>
      <span>Total: {props.totalTask}</span>
      <span>Finished: {props.finishedTask}</span>
    </div>
  );
};

export default TodoStat;
