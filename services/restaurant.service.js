// services/restaurant.service.js
import Restaurant from "../models/Restaurant.js";
import asyncHandler from "express-async-handler";
import multer from "multer";
import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";
import AppError from "../utils/AppError.js";
import { uploadMixOfImages } from "../middlewares/uploadImageMiddleware.js";

export const uploadRestaurantsImages = uploadMixOfImages([
  {
    name: "image",
    maxCount: 1,
  },
  {
    name: "images",
    maxCount: 3,
  },
]);

export const resizerestaurantImages = asyncHandler(async (req, res, next) => {
  console.log(req.files);
  if (req.files.image) {
    const imageCoverFilename = `restaurant-${uuidv4()}-${Date.now()}-cover.jpeg`;

    await sharp(req.files.image[0].buffer)
      .resize(2000, 1333)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`uploads/restaurants/${imageCoverFilename}`);

    // Save image into our db
    req.body.image = imageCoverFilename;
  }

  if (req.files.images) {
    await Promise.all(
      req.files.images.map(async (img) => {
        req.body.images = [];
        const imageName = `restaurant-${uuidv4()}-${Date.now()}.jpeg`;

        await sharp(img.buffer)
          .resize(2000, 1333)
          .toFormat("jpeg")
          .jpeg({ quality: 95 })
          .toFile(`uploads/restaurants/${imageName}`);

        // Save image into our db
        req.body.images.push(imageName);
      })
    );
  }
  next();
});

export const getAllRestaurants = async () => {
  return await Restaurant.find();
};

export const getRestaurantById = async (id) => {
  return await Restaurant.findById(id);
};

export const createRestaurant = async (data) => {
  return await Restaurant.create(data);
};
// Update restaurant
export const updateRestaurant = async (id, data) => {
  return await Restaurant.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// Delete restaurant
export const deleteRestaurant = async (id) => {
  return await Restaurant.findByIdAndDelete(id);
};
