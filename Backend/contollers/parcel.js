
const Parcel = require("../models/Parcel.js");


//create a parcel
 const createParcel  = async(req,res) => {
    try {
        const newParcels = await Parcel(req.body);
        const parcel = await  newParcels.save();
        res.status(201).json(parcel);

    } catch (error) {
       res.status(500).json(error); 
    }
}

 const getAllParcels = async(req,res)=>{

  try {
       const parcels = await Parcel.find().sort({createdAt:-1});
       res.status(200).json(parcels);
  } catch (error) {
    console.log(error);
    res.send(500).json(error);
  }
}

//update the parcel
 const updateParcel = async(req,res)=>{
    try {
         const parcel = await Parcel.findById(req.params.id);
         res.status(201).json(parcel) 
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}

//get one parcel

const getOneParcel = async (req,res)=>{

    try {
        const parcel = await Parcel.findById(req.params.id) ;
        res.status(200).json(parcel)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


//get user's parcels

 const getUserParcel = async(req,res) => {
    try {
        const parcels = await Parcel.find({senderemail:req.body.email}).sort({createdAt:-1});
        res.status(200).json(parcels)
    } catch (error) {
      console.log(error);
      res.status(500).json(error);  
    }
}



//delete a parcel 

 const deleteParcel= async (req,res) =>{
    try {
        await Parcel.findByIdAndDelete(req.params.id);
        res.status(201).json("parcel has been deleted successfully!");
    } catch (error) {
        console.log(error);
        res.status(500).json(error); 
    }
}
module.exports = {deleteParcel , getUserParcel,getOneParcel,updateParcel,getAllParcels,createParcel}

