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

export default function Liste({ tasks, deleteTask, setEditTask }) {
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
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>
                            {task.status === "100" ? (
                                <s>{task.description}</s>
                            ) : (
                                <label>{task.description}</label>
                            )}
                        </td>
                        <td>
                            <button className={getPriorityClass(task.priority)} style={{ width: "80%" }}>
                                {task.priority}
                            </button>
                        </td>
                        <td>{task.deadline}</td>
                        <td>
                            <input type="range" min="0" max="100" value={task.status}/>
                            <span>{task.status}%</span>
                        </td>
                        <td>
                            <button onClick={() => setEditTask(task)} className="btn btn-secondary mx-1 my-1">Edit</button>
                            <button onClick={() => deleteTask(task.id)} className="btn btn-danger mx-1">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}