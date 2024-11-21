import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { AddTaskAction } from "./Config/Actions";

export default function AddTask(){
    const count = useSelector((data)=>data.tasks.length);
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [deadline, setDeadline] = useState('');
    const [status, setStatus] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Create = ()=>{
        dispatch(AddTaskAction({
            id:count+1,
            description:description,
            priority:priority,
            deadline:deadline,
            status:status,
        }))
        navigate ('/')
    }

    return(
        <form className="border border" style={{display : "grid", placeItems : "center", margin : "80px"}}>
            <table>
                <tr>
                    <td><b>Description</b></td>
                    <td>
                        <textarea name="description" placeholder="Description" cols="60" rows="3" className="my-2" onChange={(e) => { setDescription(e.target.value) }}></textarea>
                    </td>
                </tr>

                <tr>
                    <td><b>Priority</b></td>
                    <td>
                        <input type="checkbox" name="priority" value="High" onChange={(e) => { setPriority(e.target.value) }} className="my-4 mx-2"/>High
                        <input type="checkbox" name="priority" value="Normal" onChange={(e) => { setPriority(e.target.value) }} className="my-4 mx-2"/>Normal
                        <input type="checkbox" name="priority" value="Low" onChange={(e) => { setPriority(e.target.value) }} className="my-4 mx-2"/>Low
                    </td>
                </tr>

                <tr>
                    <td><b>Deadline</b></td>
                    <td>
                        <input type="date" name="deadline" onChange={(e) => { setDeadline(e.target.value) }} className="my-4 form-control"/>
                    </td>
                </tr>

                <tr>
                    <td><b>Status</b></td>
                    <td>
                        <input type="checkbox" name="status" value="100" onChange={(e) => { setStatus(e.target.value) }} className="my-4 mx-2"/>100%
                        <input type="checkbox" name="status" value="75" onChange={(e) => { setStatus(e.target.value) }} className="my-4 mx-2"/>75%
                        <input type="checkbox" name="status" value="50" onChange={(e) => { setStatus(e.target.value) }} className="my-4 mx-2"/>50%
                        <input type="checkbox" name="status" value="25" onChange={(e) => { setStatus(e.target.value) }} className="my-4 mx-2"/>25%
                        <input type="checkbox" name="status" value="0" onChange={(e) => { setStatus(e.target.value) }} className="my-4 mx-2"/>0%
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                        <button onClick={Create} className="form-control btn btn-warning my-1">Create</button>
                    </td>
                </tr>
            </table>       
        </form>
    )
}