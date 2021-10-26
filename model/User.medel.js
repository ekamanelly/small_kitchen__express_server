const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    default: 0,
  },
  location: {
    type: String,
  },
});

module.exports.Meal = mongoose.model("user", userSchema);
