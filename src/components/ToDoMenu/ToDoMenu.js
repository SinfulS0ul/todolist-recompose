import React from "react";

const ToDoMenu = props => {
  return (
    <div>
      <form
        className="d-flex flex-column align-items-center"
        onSubmit={props.addTask}
      >
        <input
          className="w-100"
          autoComplete="off"
          placeholder="Type a task"
          onChange={props.handleInputChange}
        />
        <button className="w-100 btn btn-success" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default ToDoMenu;
