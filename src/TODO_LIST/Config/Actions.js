export function AddTaskAction(task) {
    return { type: "Add_Task", payload: task };
}

export function UpdateTaskAction(newTask) {
    return { type: "Update_Task", payload: newTask };
}

export function DeleteTaskAction(id) {
    return { type: "Delete_Task", payload: id };
}
