import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import genToken from "../utils/Token.js";

export const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashpassword });
    const token = genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res
      .status(200)
      .json({ success: true, message: "User signup successfully", user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const user = await User.findOne({ email }).populate(
      "listing",
      "title image1 image2 image3 description rent category city landMark",
    );
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password" });
    }
    const token = genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res
      .status(200)
      .json({ success: true, message: "User login successfully", user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const Logout = async (req, res) => {
  try {
    res.clearCookie("token", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "none",
});
    return res
      .status(200)
      .json({ success: true, message: "Logout successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .select("-password")
      .populate(
        "listing",
        "title image1 image2 image3 description rent category city landMark isBooked host ratings",
      )
      .populate(
        "booking",
        "title image1 image2 image3 description rent category city landMark isBooked host ratings",
      );
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User fatched successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
