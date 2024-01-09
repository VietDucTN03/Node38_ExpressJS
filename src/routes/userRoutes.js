import express from 'express';
import { createUser, getUser } from '../controllers/userControllers.js';

const userRoutes = express.Router();

userRoutes.get("/get-user", getUser);
userRoutes.post("/create-user", createUser);

export default userRoutes;

