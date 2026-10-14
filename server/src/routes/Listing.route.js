import express from 'express'
import { addListing, deleteListing, findListing, getListing, ratingListing, search, updateListing } from '../controller/Listing.controller.js'
import authMiddleware from '../middleware/authMiddleware.js'
import upload from '../middleware/multer.js'


const listingRouter = express.Router()
  
listingRouter.post("/add",authMiddleware,upload.fields([
    {name:"image1",maxCount:1},
    {name:"image2",maxCount:1},
    {name:"image3",maxCount:1}
]), addListing)

listingRouter.get("/get", getListing);
listingRouter.get("/findlistingbyid/:id",authMiddleware, findListing);

listingRouter.post("/update/:id",authMiddleware,upload.fields([
    {name:"image1",maxCount:1},
    {name:"image2",maxCount:1},
    {name:"image3",maxCount:1}
]), updateListing)

listingRouter.delete("/delete/:id",authMiddleware,deleteListing);
listingRouter.post("/ratings/:id",authMiddleware,ratingListing);
listingRouter.get("/search",search);

export default listingRouter;