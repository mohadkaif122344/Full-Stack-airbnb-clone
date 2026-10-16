import uploadOnCloudinary from "../config/cloudinary.js";
import Listing from "../models/Listing.model.js";
import User from "../models/User.model.js";

export const addListing = async (req, res) => {
  try {
    const host = req.userId;
    const { title, description, rent, city, landMark, category } = req.body;
    const image1 = await uploadOnCloudinary(req.files.image1[0].buffer);
const image2 = await uploadOnCloudinary(req.files.image2[0].buffer);
const image3 = await uploadOnCloudinary(req.files.image3[0].buffer);

    if (!image1 || !image2 || !image3) {
      return res.status(400).json({
        success: false,
        message: "Image upload failed",
      });
    }
    const listing = await Listing.create({
      title,
      description,
      rent,
      city,
      landMark,
      category,
      image1,
      image2,
      image3,
      host,
    });
    const user = await User.findByIdAndUpdate(
      host,
      { $push: { listing: listing._id } },
      { new: true },
    );
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user is not found" });
    }
    return res.status(201).json({
      success: true,
      message: "Listing created successfully",
      listing,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getListing = async (req, res) => {
  try {
    const listing = await Listing.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "data added successfully",
      listing,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const findListing = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      res.status(404).json({ success: false, message: "listing not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "listing found successfully", listing });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateListing = async (req, res) => {
  try {
    const { id } = req.params;
    let image1;
    let image2;
    let image3;
    const { title, description, rent, city, landMark, category } = req.body;
    if (req.files.image1) {
      image1 = await uploadOnCloudinary(req.files.image1[0].buffer);
    }
    if (req.files.image2) {
      image2 = await uploadOnCloudinary(req.files.image2[0].buffer);
    }
    if (req.files.image3) {
      image3 = await uploadOnCloudinary(req.files.image3[0].buffer);
    }
    const listing = await Listing.findByIdAndUpdate(
      id,
      {
        title,
        description,
        rent,
        city,
        landMark,
        category,
        image1,
        image2,
        image3,
      },
      { new: true },
    );
    if (!listing) {
      return res
        .status(404)
        .json({ success: false, message: "user is not found" });
    }
    return res
      .status(201)
      .json({
        success: true,
        message: "listing updated successfully",
        listing,
      });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteListing = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);
    const user = await User.findByIdAndUpdate(
      listing.host,
      {
        $pull:{ listing:listing._id },
      },
      { new: true },
    );
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    return res
      .status(201)
      .json({ success: true, message: "listing deleted successfully",listing});
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


export const ratingListing = async(req, res) =>{
  try {
    const {id} = req.params
    const {ratings} = req.body
    const listing = await Listing.findById(id)
    if(!listing){
      return res.status(404).json({success:false,
        message:"Listing not found"
      })
    }
    listing.ratings = Number(ratings);
    await listing.save();
    return res.status(201).json({success:true, message:"Rating submitted successfully",ratings:listing.ratings})
  } catch (error) {
    return res.status(500).json({success:false, message:error.message})
  }
}


export const search = async (req, res)=>{
  try {
    const {query} = req.query;
    if (!query) {
      return res.status(400).json({success:false, message:"Search query is required"})
    }
    const listing = await Listing.find({
      $or:[
        {landMark:{$regex:query, $options: "i"}},
        {city:{$regex:query, $options: "i"}},
        {title:{$regex:query, $options: "i"}},
      ]
    })
    return res.status(200).json({success:true, message:"search products",listing})
  } catch (error) {
    return res.status(500).json({success:false, message:error.message})
  }
}