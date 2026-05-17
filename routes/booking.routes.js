// routes/booking.routes.js

import express from "express";

import {
  addBooking,
  getBookings,
  getAllBookingsController,
  getSingleBooking,
  updateBookingController,
  deleteBookingController,
} from "../controllers/booking.controller.js";

const router = express.Router();

// Get All Bookings
// Create Booking
router.route("/").get(getAllBookingsController).post(addBooking);

// Get Bookings By Restaurant
router.get("/restaurant/:restaurantId", getBookings);

// Get Single Booking
// Update Booking
// Delete Booking
router
  .route("/:id")
  .get(getSingleBooking)
  .put(updateBookingController)
  .delete(deleteBookingController);

export default router;
