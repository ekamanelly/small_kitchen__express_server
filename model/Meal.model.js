const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: String,
  },
});

module.exports.Meal = mongoose.model("meal", foodSchema);
