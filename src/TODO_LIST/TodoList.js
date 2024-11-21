import React from "react";

const getPriorityClass = (priority) => {
    switch (priority) {
        case "High":
            return "btn btn-danger rounded-pill";
        case "Normal":
            return "btn btn-primary rounded-pill";
        case "Low":
            return "btn btn-success rounded-pill";
        default:
            return "";
    }
};

export default function TodoList({ todos, deleteTodo, setEditTodo, handleStatusChange }) {
    return (
        <table width="90%">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>
                            {todo.status === "100" ? (
                                <s>{todo.description}</s>
                            ) : (
                                <label>{todo.description}</label>
                            )}
                        </td>
                        <td>
                            <button className={getPriorityClass(todo.priority)} style={{ width: "80%" }}>
                                {todo.priority}
                            </button>
                        </td>
                        <td>{todo.deadline}</td>
                        <td>
                            <input type="range" min="0" max="100" value={todo.status} onChange={(e) => handleStatusChange(todo.id, e.target.value)}/>
                            <span>{todo.status}%</span>
                        </td>
                        <td>
                            <button onClick={() => setEditTodo(todo)} className="btn btn-secondary mx-1 my-1">Edit</button>
                            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger mx-1">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}