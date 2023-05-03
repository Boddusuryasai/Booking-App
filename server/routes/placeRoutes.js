import { createPlace, deletePlace, getAllPlaces, getPlaceById, getUserPlaces, updatePlace} from "../controllers/place.controller.js";
import  multer from "multer";
import express from "express"
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
const router = express.Router();
const storage = multer.memoryStorage();
const singleUpload = multer({storage}).single("file")

router.post("/uploadplace",isLoggedIn, singleUpload, createPlace)
router.get("/getallplaces", getAllPlaces)
router.get("/getplace/:id", getPlaceById)
router.get("/getuserplaces",isLoggedIn, getUserPlaces)
router.put("/updateplace/:id",isLoggedIn, updatePlace)
router.delete("/deleteplace/:id",isLoggedIn, deletePlace)

export default router