import express from "express"
import authMiddleware from "../middleware/authMiddleware.js"
import { cancelBooking, createBooking } from "../controller/Booking.controller.js"

const bookingRouter = express.Router()

bookingRouter.post("/create/:id", authMiddleware,createBooking)
bookingRouter.delete("/cancel/:id", authMiddleware,cancelBooking)

export default bookingRouter