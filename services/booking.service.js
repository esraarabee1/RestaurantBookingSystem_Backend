// services/booking.service.js
import Booking from "../models/Booking.js";

export const createBooking = async (data) => {
  return await Booking.create(data);
};

export const getBookingsByRestaurant = async (restaurantId) => {
  return await Booking.find({ restaurantId });
};
// Get all bookings
export const getAllBookings = async () => {
  return await Booking.find().populate("restaurantId");
};
// Get single booking
export const getBookingById = async (id) => {
  return await Booking.findById(id).populate("restaurantId");
};

// Update booking
export const updateBooking = async (id, data) => {
  return await Booking.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// Delete booking
export const deleteBooking = async (id) => {
  return await Booking.findByIdAndDelete(id);
};
