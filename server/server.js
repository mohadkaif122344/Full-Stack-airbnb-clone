import "dotenv/config";
import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/Auth.route.js";
import listingRouter from "./src/routes/Listing.route.js";
import bookingRouter from "./src/routes/Booking.route.js";


const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "https://client-sigma-teal-65.vercel.app",
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

await connectDB();
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
app.use("/api/booking",bookingRouter);

app.listen(port, () => {
  console.log(`Application listening on port http://localhost:${port}`);
});
