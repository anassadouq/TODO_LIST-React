import React, { useState } from "react";
import TodoList from "./TodoList";
import TaskForm from "./TaskForm";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  // Add a new todo
  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), ...todo, completed: false }]);
  };

  // Update an existing todo
  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
    setEditTodo(null);
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App mx-5">
      <h1 className="text-center">TODO LIST</h1>
      <TaskForm addTodo={addTodo} editTodo={editTodo} updateTodo={updateTodo} /> <hr/>
      <TodoList todos={todos} deleteTodo={deleteTodo} setEditTodo={setEditTodo} />
    </div>
  );
}