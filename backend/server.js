import express from "express"
import dotenv from 'dotenv'
import taskRoutes from "./routes/tasks.js"
import userRoutes from "./routes/user.js"

import mongoose from "mongoose"
dotenv.config()

const app = express()
// test GET
app.get('/', (req, res) =>{
    res.json({mssg: 'Welcome to the app'})
})


app.use((req, res, next) => {
    console.log(req.path,req.method)
    next()
})

app.use(express.json())
app.use('/api/tasks',taskRoutes)
app.use('/api/user', userRoutes)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


