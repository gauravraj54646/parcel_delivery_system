const express = require("express");
const router = express.Router();
const Cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

//registeration

router.post("/register", async (req, res) => {
  const newUser = User({
    fullName: req.body.fullName,
    email: req.body.email,
    age: req.body.age,
    country: req.body.country,
    address: req.body.address,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json("You have not registered!");
    }

    const hashedPasword = CryptoJS.AES.decrypt(user.password, process.env.PASS);

    const orignalPassword = hashedPasword.toString(Cryptojs.enc.Utf8);

    if (orignalPassword !== req.body.password) {
      res.status(500).json("wrong password");
    }
    const { password, ...info } = user._doc;

    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SEC,
      { expiresIn: "10d" }
    );
    res.status(200), json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
