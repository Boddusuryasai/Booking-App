import express from "express"
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import { createBooking, getBookingsByPlaceId, getUserBookings } from "../controllers/booking.controller.js";
const router = express.Router();
router.post("/bookings",isLoggedIn,createBooking)
router.get("/userbookings",isLoggedIn,getUserBookings)
router.get("/bookingsbyplace/:id",isLoggedIn,getBookingsByPlaceId)
export  default router