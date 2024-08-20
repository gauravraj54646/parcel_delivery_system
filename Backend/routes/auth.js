const express = require("express");
const router = express.Router();
const Cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");
const { registerUser, loginUser } = require("../contollers/auth");
// const {loginUser,registerUser}  = require("../contollers/auth.js");

dotenv.config();

//registeration

router.post("/register", registerUser);

//login
router.post("/login", loginUser);

module.exports = router;
