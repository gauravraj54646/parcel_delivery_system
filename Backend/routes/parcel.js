const express = require("express");
const {
  createParcel,
  getAllParcels,
  updateParcel,
  getOneParcel,
  getUserParcel,
  deleteParcel,
} = require("../contollers/parcel.js");
const router = express.Router();

//add parcel
router.post("/", createParcel);

//get all parcels
router.get("/", getAllParcels);

//update a parcels
router.put("/:id", updateParcel);

//getone parcel
router.get("/find/:id", getOneParcel);

//get users parcels

router.post("/me", getUserParcel);

//delete parcel

router.delete("/id", deleteParcel);

module.exports = router;
