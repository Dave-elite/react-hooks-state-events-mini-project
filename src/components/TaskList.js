import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id} // Use unique ID
          category={task.category}
          text={task.text}
          onDelete={() => onDeleteTask(task.id)} // Pass the delete handler with task ID
        />
      ))}
    </div>
  );
}

export default TaskList;
