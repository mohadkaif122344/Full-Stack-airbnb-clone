import Booking from "../models/Booking.model.js";
import Listing from "../models/Listing.model.js";
import User from "../models/User.model.js";

export const createBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { checkIn, checkOut, totalRent } = req.body;
    const listing = await Listing.findById(id);
    if (!listing) {
      return res
        .status(404)
        .json({ success: false, message: "Listing is not found" });
    }
    if (new Date(checkIn) >= new Date(checkOut)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid checkIn/checkOut" });
    }
    if (listing.isBooked) {
      return res
        .status(400)
        .json({ success: false, message: "Listing is Already Booked" });
    }
    const booking = await Booking.create({
      checkIn,
      checkOut,
      totalRent,
      host: listing.host,
      guest: req.userId,
      listing: listing._id,
    });
    await booking.populate("host","email")
    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        $push: { booking: listing._id },
      },
      { new: true },
    );
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User is not found" });
    }
    listing.guest = req.userId;
    listing.isBooked = true;
    await listing.save();

    return res
      .status(201)
      .json({ success: true, message: "Booking Created", booking });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


export const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, { isBooked: false });
    const user = await User.findByIdAndUpdate(
      listing.guest,
      {
        $pull: { booking: listing._id },
      },
      { new: true },
    );
    if (!user) {
      return res.status(404).json({ message: "user is not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Booking Cancelled" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


