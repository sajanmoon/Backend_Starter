const express = require("express");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.use("/signup", async (req, res) => {
  // Creating a new instance of a User model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("user signup succesfully");
  } catch (err) {
    res.status(400).send("signup failed", err.message);
  }
});

module.exports = authRouter;
