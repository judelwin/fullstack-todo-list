import {useTasksContext} from '../hooks/useTasksContext'
import {useState, useEffect} from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
const Task = ({task}) => {
    const {dispatch} = useTasksContext()
    const [completed, setCompleted] = useState(task.completed)
    const {user} = useAuthContext()
    useEffect(() => { setCompleted(task.completed); }, [task.completed])
    const API_URL = process.env.REACT_APP_API_URL
    const handleDelete = async () =>{
        if (!user){
            return
        }
        const response = await fetch('${REACT_APP_API_URL}/api/tasks/' + task._id, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if (response.ok){
            dispatch({type: 'DELETE_TASK', payload: json})
        }
    }
    
    const handleCheck = async() => {
        const newTask = task
        if (newTask.completed === true){
            newTask.completed = false
            console.log("now false")
        } else if (newTask.completed === false){
            newTask.completed = true
            console.log("now true")
        }
        const response = await fetch('${REACT_APP_API_URL}/api/tasks/' + task._id, {
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(newTask)
            
        })

        const json = await response.json()
        if (response.ok){
            dispatch({type: 'UPDATE_TASK', payload: json})
            //setCompleted(newTask.completed)
        }
    }
    return (
        <div className="task">
            <input type="checkbox" checked = {completed}  onChange = {handleCheck}></input>
            <p>{task.description}</p>
            <button className = "material-symbols-outlined"onClick ={handleDelete}>delete</button>
        </div>
    )
}

export default Task
