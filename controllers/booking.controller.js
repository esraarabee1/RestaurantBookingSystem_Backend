import asyncHandler from "express-async-handler";
import AppError from "../utils/AppError.js";
import mongoose from "mongoose";
// controllers/booking.controller.js
import {
  createBooking,
  getBookingsByRestaurant,
} from "../services/booking.service.js";

export const addBooking = asyncHandler(async (req, res, next) => {
  const { restaurantId, name, date } = req.body;

  // validation
  if (!restaurantId || !name || !date) {
    return next(new AppError("restaurantId, name and date are required", 400));
  }

  // validate object id
  if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
    return next(new AppError("Invalid restaurant ID", 400));
  }

  const booking = await createBooking(req.body);

  res.status(201).json({
    success: true,
    data: booking,
  });
});

export const getBookings = asyncHandler(async (req, res, next) => {
  const { restaurantId } = req.params;

  // validate object id
  if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
    return next(new AppError("Invalid restaurant ID", 400));
  }

  const bookings = await getBookingsByRestaurant(restaurantId);

  res.status(200).json({
    success: true,
    results: bookings.length,
    data: bookings,
  });
});
