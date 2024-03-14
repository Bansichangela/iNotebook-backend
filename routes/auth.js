const express = require("express");
const User = require("../models/User");
const router = express.Router();

//Create a User using: POST "/api/auth". Doesn't require Auth
router.post("/", (req, res) => {
  console.log(req.body);
  const user = User(req.body); //creates new instance of the model with data from request body
  user.save();
  res.send(req.body);
});

module.exports = router;
