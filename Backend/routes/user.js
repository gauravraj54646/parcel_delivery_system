const express = require("express");
const { deleteUser, getAllUsers } = require("../contollers/user");

const router = express.Router();


//delete User

router.delete("/:id",deleteUser);


//get all users
router.get("/",getAllUsers);


module.exports = router;