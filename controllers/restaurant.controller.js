import asyncHandler from "express-async-handler";
import AppError from "../utils/AppError.js";
// controllers/restaurant.controller.js
import {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
} from "../services/restaurant.service.js";

export const getRestaurants = asyncHandler(async (req, res) => {
  const data = await getAllRestaurants();

  res.status(200).json({
    success: true,
    data,
  });
});

export const getRestaurant = asyncHandler(async (req, res, next) => {
  const restaurant = await getRestaurantById(req.params.id);

  if (!restaurant) {
    return next(new AppError("Restaurant not found", 404));
  }

  res.status(200).json({
    success: true,
    data: restaurant,
  });
});
export const addRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await createRestaurant(req.body);

  res.status(201).json({
    success: true,
    data: restaurant,
  });
});
