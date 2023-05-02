import dotenv from "dotenv";
import express from "express";
import cors from 'cors'
const app = express();
import authRoutes from "./routes/authRoutes.js"
dotenv.config()
app.use(cors())

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1" , authRoutes)
export default app;