import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onFilter={handleFilter}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
