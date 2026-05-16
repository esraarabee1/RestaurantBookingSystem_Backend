// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: String,
    date: {
      type: Date,
      required: true,
    },
    time: String,
    guests: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
