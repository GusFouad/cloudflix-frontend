const moviesRoute = require("express").Router();
const User = require("../models/User");

const verifyToken = require("./verifyToken");

moviesRoute.get("/list", verifyToken, async (req, res) => {
  const user = await User.findById(req.user._id).then(function (document) {
    res.json(document.movies);
    console.log(document.movies);
  });
});

moviesRoute.post("/add", verifyToken, async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(user);
  user.movies.push(req.body);
  console.log(req.body);
  await user.save().then((movies) => {
    res.json("movies updated");
  });
});
module.exports = moviesRoute;
