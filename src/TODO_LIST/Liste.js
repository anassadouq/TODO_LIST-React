import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { UpdateTaskAction, DeleteTaskAction } from "./Config/Actions";

export default function Liste() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(DeleteTaskAction(id));
    };

    const handleStatusChange = (id, newStatus) => {
        const taskToUpdate = tasks.find((task) => task.id === id);
        if (taskToUpdate) {
            dispatch(
                UpdateTaskAction({
                    ...taskToUpdate,
                    status: newStatus, // Status aktualisieren
                })
            );
        }
    };

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

    return (
        <div className="mx-5">
            <h1 className="text-center">TODO LIST</h1>

            <Link to="/create">
                <button className="btn btn-warning my-3">Add a new Task</button>
            </Link>

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
                    {tasks.length > 0 ? (
                        tasks.map((task) => (
                            <tr key={task.id}>
                                <td>
                                    {task.status === "100" ? (
                                        <s>{task.description}</s>
                                    ) : (
                                        <label>{task.description}</label>
                                    )}
                                </td>
                                <td>
                                    <button
                                        className={getPriorityClass(task.priority)}
                                        style={{ width: "80%" }}
                                    >
                                        {task.priority}
                                    </button>
                                </td>
                                <td>{task.deadline}</td>
                                <td>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={task.status}
                                        onChange={(e) =>
                                            handleStatusChange(task.id, e.target.value)
                                        }
                                    />
                                    <span>{task.status}%</span>
                                </td>
                                <td>
                                    <Link to={`/update/${task.id}`}>
                                        <button className="btn btn-secondary mx-1">
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(task.id)}
                                        className="btn btn-danger mx-1"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">
                                No tasks available. Add some tasks!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
