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

    export const getPlaceById = asyncHandler(async (req, res) => {
        const {id: placeId} = req.params
    
        const place = await Place.findById(placeId)
    
        if (!place) {
            throw new CustomError("No place found", 404)
        }
    
        res.status(200).json({
            success: true,
            place
        })
    })
    export const getUserPlaces = asyncHandler(async (req, res) => {
       
        
        const places = await Place.find({ owner: req.user._id })
    
        if (!places) {
            throw new CustomError("No places found", 404)
        }
    
        res.status(200).json({
            success: true,
            places
        })
    })

  
  export const updatePlace = asyncHandler(async (req, res) => {
    const { id: PlaceId } = req.params;
    let place = await Place.findById(PlaceId);
    if (place.owner?.toString() !== req.user._id) {
        throw new CustomError("Not Allowed", 404);
    }
    let updatedPlace = await Place.findByIdAndUpdate(
      PlaceId,
     req.body,
      {
        new: true,
        runValidators: true,
      }
    );
  
    if (!updatedPlace) {
      throw new CustomError("Place not found", 404);
    }
  
    res.status(200).json({
      success: true,
      message: "Place Updated Successfully",
     
    });
  });

  export const deletePlace = asyncHandler(async (req, res) => {
    const { id: PlaceId } = req.params;
    const PlaceToDelete = await Place.findById(PlaceId);
    if (PlaceToDelete.owner?.toString() !== req.user._id) {
        throw new CustomError("Not Allowed", 404);
    }
    if (!PlaceToDelete) {
      throw new CustomError("Place not found", 404);
    }
  
    PlaceToDelete.remove();
    res.status(200).json({
      success: true,
      message: "Place has been deleted successfully",
    });
  });