// routes/restaurant.routes.js
import express from "express";
import {
  getRestaurants,
  getRestaurant,
  addRestaurant,
  updateRestaurantController,
  deleteRestaurantController,
} from "../controllers/restaurant.controller.js";

const router = express.Router();

router.route("/").get(getRestaurants).post(addRestaurant);

router
  .route("/:id")
  .get(getRestaurant)
  .put(updateRestaurantController)
  .delete(deleteRestaurantController);

export default router;
