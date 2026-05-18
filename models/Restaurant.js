// models/Restaurant.js
import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: String,
    location: String,
    image: String,
    images: [String],
    cuisine: String,
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const setImageURL = (doc) => {
  if (doc.image) {
    const imageUrl = `${process.env.BASE_URL}/restaurants/${doc.image}`;
    doc.image = imageUrl;
  }
  if (doc.images) {
    const imagesList = [];
    doc.images.forEach((image) => {
      const imageUrl = `${process.env.BASE_URL}/restaurants/${image}`;
      imagesList.push(imageUrl);
    });
    doc.images = imagesList;
  }
};
// findOne, findAll and update
restaurantSchema.post("init", (doc) => {
  setImageURL(doc);
});

// create
restaurantSchema.post("save", (doc) => {
  setImageURL(doc);
});

export default mongoose.model("Restaurant", restaurantSchema);
