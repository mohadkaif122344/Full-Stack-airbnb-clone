import express from "express"
import { getCurrentUser, Login, Logout, Signup } from "../controller/Auth.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const authRouter = express.Router()

authRouter.post("/signup", Signup);
authRouter.post("/login", Login);
authRouter.post("/logout", Logout)
authRouter.get("/user",authMiddleware, getCurrentUser);

export default authRouter;