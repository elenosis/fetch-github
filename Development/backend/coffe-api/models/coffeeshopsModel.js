import { Schema, model } from "mongoose";

const coffeeshopSchema = new Schema({
  name: { type: String, required: true },
  map_url: { type: String, required: true },
  img_url: String,
  location: { type: String, required: true },
  has_sockets: Boolean,
  has_wifi: Boolean,
  has_toilet: Boolean,
  can_take_calls: Boolean,
  seats: Number,
  espresso_price: String,
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 5,
  },
  comments: [String],
});

const CoffeeshopModel = model("coffeeshop", coffeeshopSchema, "coffeeshops");

export default CoffeeshopModel;
