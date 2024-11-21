import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateTaskAction } from "./Config/Actions";
import { useNavigate } from "react-router-dom";

export default function UpdateTask() {
    const {id} = useParams()
    const task = useSelector((data)=>data.tasks.find((u)=>u.id===parseInt(id)));
    const [description, setDescription] = useState(task.description);
    const [priority, setPriority] = useState(task.priority);
    const [deadline, setDeadline] = useState(task.deadline);
    const [status, setStatus] = useState(task.status);

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(UpdateTaskAction({
            id:id,
            description:description,
            priority:priority,
            deadline:deadline,
            status:status,
        }))
        navigate('/')
    }

    return (
        <form className="border border" style={{display : "grid", placeItems : "center", margin : "80px"}}>
            <table>
                <tr>
                    <td><b>Description</b></td>
                    <td>
                        <textarea name="description" cols="60" rows="3" className="my-2" value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                    </td>
                </tr>
                <tr>
                    <td><b>Priority</b></td>
                    <td>
                        <input type="checkbox" name="priority" value="High" onChange={(e) => { setPriority(e.target.value) }} className="my-4 mx-2" checked={priority === "High"}/>High
                        <input type="checkbox" name="priority" value="Normal" onChange={(e) => { setPriority(e.target.value) }} className="my-4 mx-2" checked={priority === "Normal"}/>Normal
                        <input type="checkbox" name="priority" value="Low" onChange={(e) => { setPriority(e.target.value) }} className="my-4 mx-2" checked={priority === "Low"}/>Low
                    </td>
                </tr>
                <tr>
                    <td><b>Deadline</b></td>
                    <td>
                        <input type="date" name="deadline" value={deadline} onChange={(e) => { setDeadline(e.target.value) }} className="my-4 form-control"/>
                    </td>
                </tr>
                <tr>
                    <td><b>Status</b></td>
                    <td>
                        <input type="radio" name="status" value="100" onChange={(e) => { setStatus(e.target.value) }} className="my-4 mx-1" checked={status === "100"}/>100%
                        <input type="radio" name="status" value="75" onChange={(e) => { setStatus(e.target.value) }} className="my-4 mx-1" checked={status === "75"}/>75%
                        <input type="radio" name="status" value="50" onChange={(e) => { setStatus(e.target.value) }} className="my-4 mx-1" checked={status === "50"}/>50%
                        <input type="radio" name="status" value="25" onChange={(e) => { setStatus(e.target.value) }} className="my-4 mx-1" checked={status === "25"}/>25%
                        <input type="radio" name="status" value="0" onChange={(e) => { setStatus(e.target.value) }} className="my-4 mx-1" checked={status === "0"}/>0%
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button onClick={handleClick} className="form-control btn btn-secondary my-1">Update</button>
                    </td>
                </tr>
            </table>            
        </form>
    )
}