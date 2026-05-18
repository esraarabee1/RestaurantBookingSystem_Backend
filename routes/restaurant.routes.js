// routes/restaurant.routes.js
import express from "express";
import {
  getRestaurants,
  getRestaurant,
  addRestaurant,
  updateRestaurantController,
  deleteRestaurantController,
} from "../controllers/restaurant.controller.js";
import {
  uploadRestaurantsImages,
  resizerestaurantImages,
} from "../services/restaurant.service.js";
const router = express.Router();

router
  .route("/")
  .get(getRestaurants)
  .post(uploadRestaurantsImages, resizerestaurantImages, addRestaurant);

router
  .route("/:id")
  .get(getRestaurant)
  .put(updateRestaurantController)
  .delete(deleteRestaurantController);

export default router;
