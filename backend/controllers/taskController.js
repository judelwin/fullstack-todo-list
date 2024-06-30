import Task from "../models/TaskModel.js"
import mongoose from "mongoose"
// get all tasks
const getTasks = async (req, res) => {
    const user_id = req.user._id
    const tasks = await Task.find({ user_id }).sort({createdAt: -1})
    res.status(200).json(tasks)
}

// get single task
const getTask = async (req, res) => {
    const {id} = req.params
    //check if id is okay
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Task"})
    }
    const task = await Task.findById(id)
    if (!task){
        return res.status(404).json({error: "No such Task"})
    }
    res.status(200).json({task})
}

// create new task

const createTask = async (req, res) => {
    const {completed, description} = req.body

    //add doc to db
    try {
        const user_id = req.user._id
        const task = await Task.create({completed,description, user_id})
        res.status(200).json(task)
    } catch (error){
        res.status(400).json({error: error.messsage})
    }
}

//delete task

const deleteTask = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Task"})
    }
    const task = await Task.findOneAndDelete({_id: id})
    if (!task){
        return res.status(404).json({error: "No such Task"})
    }
    res.status(200).json(task)
}

const updateTask = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such Task"})
    }
    const task = await Task.findOneAndUpdate({_id: id}, {
        ...req.body
    }, {new: true})
    if (!task){
        return res.status(404).json({error: "No such Task"})
    }
    res.status(200).json(task)
}

export {createTask, getTasks, getTask, deleteTask, updateTask }