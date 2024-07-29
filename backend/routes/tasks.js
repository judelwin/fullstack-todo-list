import express from "express"
import {createTask, getTasks, getTask, deleteTask, updateTask } from "../controllers/taskController.js"
import requireAuth from "../middleware/requireAuth.js"

const router = express.Router()
// GET all tasks

router.use(requireAuth)

router.get('${REACT_APP_API_URL}/', getTasks)

// GET single task
router.get('${REACT_APP_API_URL}/:id', getTask)


// POST a new task
router.post('${REACT_APP_API_URL}/', createTask)
// DELETE a task
router.delete('${REACT_APP_API_URL}/:id', deleteTask)

// UPDATE a task
router.patch('${REACT_APP_API_URL}/:id', updateTask)
export default router
