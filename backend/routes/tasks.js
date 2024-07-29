import express from "express"
import {createTask, getTasks, getTask, deleteTask, updateTask } from "../controllers/taskController.js"
import requireAuth from "../middleware/requireAuth.js"

const router = express.Router()
// GET all tasks

//router.use(requireAuth)

router.get('/', getTasks)

// GET single task
router.get('/:id', getTask)


// POST a new task
router.post('/', createTask)
// DELETE a task
router.delete('/:id', deleteTask)

// UPDATE a task
router.patch('/:id', updateTask)
export default router
