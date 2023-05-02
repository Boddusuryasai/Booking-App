import cloudinary from "cloudinary"
import Place from "../models/place.js"
import getDataUri from "../utils/daturi.js";
import asyncHandler from "../utils/asyncHandler.js";
export const createPlace= asyncHandler(async (req, res) => {
        const {
            title,address,description,price,
            perks,extraInfo,checkIn,checkOut,maxGuests,
          } = req.body;
          const file = req.file
          const parsedFile = getDataUri(file)
          const cloud = await cloudinary.v2.uploader.upload(parsedFile.content)
          const place = await Place.create({
              owner:req.user._id,price,
              title,address,photos:cloud.secure_url,description,
              perks,extraInfo,checkIn,checkOut,maxGuests,
            });
       
          if (   !title || !address || !description || !price ||
            !perks || !extraInfo || !checkIn || !checkOut || !maxGuests) {
        throw new Error("All fields are mandotory");
      }
      res.status(201).json({
        success: true,
        message: "Post Created Successfully",
        place,
      });
    
    })
    export const getAllPlaces = asyncHandler(async (req, res) => {
        const places = await Place.find({})
    
        if (!places) {
            throw new CustomError("No places found", 404)
        }
    
        res.status(200).json({
            success: true,
            places
        })
    })