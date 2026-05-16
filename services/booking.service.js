// services/booking.service.js
import Booking from "../models/Booking.js";

export const createBooking = async (data) => {
  return await Booking.create(data);
};

export const getBookingsByRestaurant = async (restaurantId) => {
  return await Booking.find({ restaurantId });
};
