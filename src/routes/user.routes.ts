import express from 'express';
import { getUserData, loginUser, registerUser } from '../controllers/user.controller';
import auth from '../middlewares/auth';



const userRouter = express.Router();

// Register
userRouter.post('/register', registerUser);

// Login
userRouter.post('/login', loginUser);

// Get user data
userRouter.get('/', auth, getUserData);

export default userRouter;
