const express = require("express");
const User = require("../models/usermodel");
const bcrypt = require("bcrypt");

const router = express.Router();

// register

router.post("/register", async (req, res) => {
  try {
    // generate new password

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // generate new user
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    // save user and give a response
    user.save();
    res.send("you've been registered successfully");
  } catch (e) {
    console.log(e);
  }
});
// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");

    res.json(user);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
