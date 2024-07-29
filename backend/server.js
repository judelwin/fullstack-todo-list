import express from "express"
import dotenv from 'dotenv'
import taskRoutes from "./routes/tasks.js"
import userRoutes from "./routes/user.js"
import cors from "cors"
import mongoose from "mongoose"
dotenv.config()

const API_URL = process.env.REACT_APP_API_URL
const corsOptions = {
  origin: 'https://fullstack-todo-list-knnto4arg-judelwins-projects.vercel.app', // Replace with your Vercel front-end URL
  methods: 'GET,PUT,PATCH,POST,DELETE',
  credentials: true,
};


const app = express()
// test GET
app.get('/', (req, res) =>{
    res.json({mssg: 'raaaa'})
})

app.use(cors(corsOptions))

app.use((req, res, next) => {
    console.log(req.path,req.method)
    next()
})

app.use(express.json())
app.use('${REACT_APP_API_URL}/api/tasks',taskRoutes)
app.use('${REACT_APP_API_URL}/api/user', userRoutes)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


