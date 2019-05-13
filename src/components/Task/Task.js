import React from "react";
import "./Task.css";

export const Task = props => {
  return (
    <li className="w-100 d-flex flex-row">
      <span
        className="w-100"
        onClick={e => props.checkLikeDone(props.task.key)}
      >
        <button className="list-group-item list-group-item-action justify-content-between align-items-center btn">
          <span>{props.task.text}</span>
        </button>
      </span>
      <button className="close" onClick={e => props.deleteTask(props.task.key)}>
        x
      </button>
    </li>
  );
};
