import express from "express";
import errorHandler from "./middlewares/error.middleware.js";
import dotenv from "dotenv";
// import cors from "cors";
import morgan from "morgan";

import connectDB from "./config/db.js";
import restaurantRoutes from "./routes/restaurant.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
// dotenv.config();
dotenv.config({ path: "config.env" });
connectDB();
const app = express();

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}
// app.use(cors());
app.use(express.json());
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/bookings", bookingRoutes);

// error middleware (LAST ALWAYS)
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API Running v1");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
