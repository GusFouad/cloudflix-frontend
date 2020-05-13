const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  movieId: {
    type: Number,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  movies: [MovieSchema],
});

module.exports = mongoose.model("User", userSchema);
