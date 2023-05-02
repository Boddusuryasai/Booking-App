import dotenv from "dotenv";
import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser"
const app = express();
import authRoutes from "./routes/authRoutes.js"
import placeRoutes from "./routes/placeRoutes.js"
dotenv.config()
app.use(cors())
app.use(cookieParser())
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/auth" , authRoutes)
app.use("/api/v1/place" , placeRoutes)
export default app;