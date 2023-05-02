import Booking from "../models/booking.js";
import asyncHandler from "../utils/asyncHandler.js";
export const createBooking = asyncHandler(async (req, res) => {
    const {
        place,checkIn,checkOut,numberOfGuests,name,phone,price,
      } = req.body;

  const booking = await  Booking.create({
    place,checkIn,checkOut,numberOfGuests,name,phone,price,
    user:req.user._id,
  });
  res.status(201).json({
    success: true,
    message: "booking Created Successfully",
    booking,
  });
});



export const getBookingsByPlaceId =asyncHandler( async (req, res) => {
  const { placeId } = req.params;


    // Find all bookings with the matching placeId
    const bookings = await Booking.find({ placeId });

    // Return the bookings as a response
    res.status(200).json({ bookings });
  
});
export const getUserBookings =asyncHandler( async (req, res) => {
    const bookings = await Booking.find({user:req.user._id}).populate('place') 

  if (!bookings) {
    throw new CustomError("No bookings found", 404);
  }
  res.status(200).json({
    success: true,
    bookings,
  });
});
