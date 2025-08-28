import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});
}

// login user
export const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// singup user
export const signupUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.signup(email, password);
        const token = createToken(user._id);
        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const isAuthenticated = async (req, res) => {
    const {authorization} = req.headers;

    if(!authorization) {
        return res.status(200).json(false);
    }
    
    const token = authorization.split(' ')[1];

    try {
        jwt.verify(token, process.env.SECRET);
        return res.status(200).json(true);
    } catch (error) {
        return res.status(200).json(false);
    }
}