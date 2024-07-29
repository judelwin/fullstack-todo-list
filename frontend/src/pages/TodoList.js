import { useEffect } from 'react'
import ListForm from '../components/ListForm.jsx'
import Task from '../components/Task.jsx'
import { useTasksContext} from "../hooks/useTasksContext.js"
import { useAuthContext } from "../hooks/useAuthContext.js"

const TodoList = () => {
    const URL = process.env.REACT_APP_API_URL
    const {user}  = useAuthContext()
    const {tasks, dispatch} = useTasksContext()
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('${URL}/api/tasks', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type:"SET_TASKS", payload: json})
            }
        }
        if (user){
            fetchTasks()
        }
    },[dispatch, user])
    return (
        <div className = "todo-list">
            <ListForm />
            <div className="tasks">
                {tasks && tasks.map((task) => (
                    <Task key = {task._id} task={task}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList
