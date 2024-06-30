import mongoose from "mongoose"

const {Schema} = mongoose

const taskSchema = new Schema({
    completed: {
        type: Boolean
    },
    description: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true})

export default mongoose.model('Task', taskSchema)

