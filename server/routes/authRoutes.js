import express from "express"
import {isLoggedIn } from "../middlewares/isLoggedIn.js";
import { getProfile, login, signUp } from "../controllers/auth.controller.js";
import { createPlace} from "../controllers/place.controller.js";
const router = express.Router();
import  multer from "multer";
const storage = multer.memoryStorage();
const singleUpload = multer({storage}).single("file")
//REGISTER || METHOD POST
router.post("/signup", signUp);

//LOGIN || POST
router.post("/login", login);

//PROFILE || GET (Post Login)
router.get("/profile", isLoggedIn,getProfile)
router.post("/upload",isLoggedIn, singleUpload, createPlace)



export default router