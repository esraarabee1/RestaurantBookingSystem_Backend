// routes/restaurant.routes.js
import express from "express";
import {
  getRestaurants,
  getRestaurant,
  addRestaurant,
} from "../controllers/restaurant.controller.js";

const router = express.Router();

router.get("/", getRestaurants);
router.get("/:id", getRestaurant);
router.post("/", addRestaurant);

export default router;
