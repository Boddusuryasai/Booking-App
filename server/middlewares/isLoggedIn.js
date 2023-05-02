import User from "../models/user.js";
import JWT from "jsonwebtoken"
import asyncHandler from "../utils/asyncHandler.js";
import config from "../config/db.js";
import CustomError from "../utils/customeError.js";



export const isLoggedIn = asyncHandler(async (req, res, next) => {
    let token;
    if (req.cookies.token || (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) ) {
        token = req.cookies.token || req.headers.authorization.split(" ")[1]
    }
    console.log(token)
    if (!token) {
        throw new CustomError("Not authorized to access this resource", 401)
    }

    try {
        const decodedJwtPayload = JWT.verify(token, process.env.JWT_SECRET);

         req.user = await User.findById(decodedJwtPayload._id, "name email ")
         next()
    } catch (error) {
        throw new CustomError("Not authorized to access this resource", 401)
    }
    
})


