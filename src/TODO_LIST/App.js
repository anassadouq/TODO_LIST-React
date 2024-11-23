import React, { useState } from "react";
import Liste from "./Liste";
import Formulaire from "./Formulaire";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task }]); //Use Date.now() to generate a unique id for each task
  };

  // Update a task
  const updateTask = (id, taskUpdate) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...taskUpdate } : task)));
    setEditTask();
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App mx-5">
      <h1 className="text-center">TODO LIST</h1>
      <Formulaire addTask={addTask} editTask={editTask} updateTask={updateTask} /> <hr/>
      <Liste tasks={tasks} deleteTask={deleteTask} setEditTask={setEditTask} />
    </div>
  );
}