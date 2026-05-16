// routes/booking.routes.js
import express from "express";
import { addBooking, getBookings } from "../controllers/booking.controller.js";

const router = express.Router();

router.post("/", addBooking);
router.get("/:restaurantId", getBookings);

export default router;
