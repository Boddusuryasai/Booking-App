import express from "express"
import {isLoggedIn } from "../middlewares/isLoggedIn.js";
import { getProfile, login, logout, signUp } from "../controllers/auth.controller.js";

const router = express.Router();

//REGISTER || METHOD POST
router.post("/signup", signUp);

//LOGIN || POST
router.post("/login", login);

//LOGOUT
router.post("/logout", logout);

//PROFILE || GET (Post Login)
router.get("/profile", isLoggedIn,getProfile)




export default router