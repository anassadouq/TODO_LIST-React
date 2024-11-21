import React, { useState, useEffect } from "react";

export default function TaskForm({ addTodo, editTodo, updateTodo }) {
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [deadline, setDeadline] = useState("");
    const [status, setStatus] = useState("");

    // Populate form fields if editing a todo
    useEffect(() => {
        if (editTodo) {
            setDescription(editTodo.description || "");
            setPriority(editTodo.priority || "");
            setDeadline(editTodo.deadline || "");
            setStatus(editTodo.status || "");
        }
    }, [editTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const taskData = {
            description, priority, deadline, status
        };

        if (editTodo) {
            // Update the existing task
            updateTodo(editTodo.id, taskData);
        } else {
            // Add a new task
            addTodo(taskData);
        }

        // Reset form fields and exit edit mode
        setDescription("");
        setPriority("");
        setDeadline("");
        setStatus("");
    };

    return (
        <form onSubmit={handleSubmit} style={{display : "grid", placeItems : "center", margin : "20px"}}>
            <table>
                <tbody>
                    <tr>
                        <td><b>Description</b></td>
                        <td>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" cols="60" rows="3" className="my-1"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Priority</b></td>
                        <td>
                            
                            <input type="radio" value="High" checked={priority === "High"} onChange={(e) => setPriority(e.target.value)} className="my-2 mx-2"/> High
                            <input type="radio" value="Normal" checked={priority === "Normal"} onChange={(e) => setPriority(e.target.value)} className="my-2 mx-2"/> Normal
                            <input type="radio" value="Low" checked={priority === "Low"} onChange={(e) => setPriority(e.target.value)} className="my-2 mx-2"/> Low
                        </td>
                    </tr>
                    <tr>
                        <td><b>Deadline</b></td>
                        <td>
                            <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="my-2 form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Status</b></td>
                        <td>
                            <input type="radio" value="100" checked={status === "100"} onChange={(e) => setStatus(e.target.value)} className="my-2 mx-2"/>100%
                            <input type="radio" value="75" checked={status === "75"} onChange={(e) => setStatus(e.target.value)} className="my-2 mx-2"/>75%
                            <input type="radio" value="50" checked={status === "50"} onChange={(e) => setStatus(e.target.value)} className="my-2 mx-2"/>50%
                            <input type="radio" value="25" checked={status === "25"} onChange={(e) => setStatus(e.target.value)} className="my-2 mx-2"/>25%
                            <input type="radio" value="0" checked={status === "0"} onChange={(e) => setStatus(e.target.value)} className="my-2 mx-2"/>0%
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit" className="form-control btn btn-dark my-1">
                                {editTodo ? "Update" : "Add"}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}