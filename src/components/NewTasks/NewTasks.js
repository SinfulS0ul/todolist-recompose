import React from "react";
import { Task } from "../Task/Task";

const NewTasks = props => {
  let taskList = props.tasks.filter(task => !task.done);
  taskList = taskList.map(task => (
    <Task
      key={task.key}
      task={task}
      checkLikeDone={props.checkLikeDone}
      deleteTask={props.deleteTask}
    />
  ));
  return <ul>{taskList}</ul>;
};

export default NewTasks;
