const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  mealName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: String,
  },
  trackId: {
    type: String,
    default: 0,
  },
  photo: { type: String, default: "" },
});

module.exports.Meal = mongoose.model("meal", foodSchema);
