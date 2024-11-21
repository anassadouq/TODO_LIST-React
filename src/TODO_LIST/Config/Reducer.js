const initialState={
    tasks:[
        
    ]
}

export default function reducer(state=initialState ,action){
    switch(action.type){
        case 'Add_Task':
            return{...state , tasks:[...state.tasks, action.payload]}
        case 'Update_Task':
            const task = state.tasks.find((u)=>u.id===parseInt(action.payload.id))
            if(task){
                task.description = action.payload.description
                task.priority = action.payload.priority
                task.deadline = action.payload.deadline
                task.status = action.payload.status
            }
            return state
        case 'Delete_Task':
            return{...state , tasks:[...state.tasks.filter((u)=>u.id!==parseInt(action.payload))]}
        default :
        return state;
        }
}