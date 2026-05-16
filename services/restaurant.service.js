// services/restaurant.service.js
import Restaurant from "../models/Restaurant.js";

export const getAllRestaurants = async () => {
  return await Restaurant.find();
};

export const getRestaurantById = async (id) => {
  return await Restaurant.findById(id);
};

export const createRestaurant = async (data) => {
  return await Restaurant.create(data);
};
