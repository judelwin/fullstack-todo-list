import User from "../models/userModel.js"
import jwt from "jsonwebtoken"


const createToken = (_id) =>{
    return jwt.sign({_id},process.env.SECRET, {expiresIn: '3d'})
}


//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        return res.status(200).json({email,token})
    } catch (error) {
        return res.status(400).json({error: error.message})

    }
}



//signup user

const signupUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.signup(email, password)
        const token = createToken(user._id)
        return res.status(200).json({email,token})
    } catch (error) {
        return res.status(400).json({error: error.message})

    }
}

export {loginUser, signupUser}