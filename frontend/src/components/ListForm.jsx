import {useState} from 'react'
import {useTasksContext} from '../hooks/useTasksContext.js'
import { useAuthContext } from '../hooks/useAuthContext.js'
const ListForm = () => {
    const [description, setDescription] = useState("")
    const [error, setError] = useState(null)
    const { dispatch } = useTasksContext()
    const {user} = useAuthContext()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!user){
            setError("You must be logged in")
            return
        }
        const completed = false
        const task = {completed, description}
        const response = await fetch('${REACT_APP_API_URL}/api/tasks', {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        } else {
            dispatch({type: "CREATE_TASK",payload: json})
            setDescription("")
            console.log("new task added")
        }
        
    }





    return (
        <div>
        <form onSubmit = {handleSubmit} className = "list-form">
            <div className="form-row">
                {/* <input type = "checkbox" onChange = {(e) => setCompleted(e.target.value)} /> */}
                <input placeholder = "Enter your task here..." 
                    onChange = {(e) => setDescription(e.target.value)}
                    value = {description}
                />
                <button className = "material-symbols-outlined" id="addButton">add</button>
            </div>
            
        </form>
        {error && <div className="error-div">{error}</div>}
        </div>
    )
}

export default ListForm
