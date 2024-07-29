import express from "express"
import {signupUser, loginUser} from "../controllers/userController.js"
const router = express.Router()

//login route

router.post("${REACT_APP_API_URL}/login", loginUser)


//signup route

router.post("${REACT_APP_API_URL}/signup", signupUser)



export default router
