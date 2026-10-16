import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { Readable } from "stream";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const uploadOnCloudinary = async (file) => {
  if (!file) {
    return null;
  }

  try {
    let uploadResult;

    if (Buffer.isBuffer(file)) {
      uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "airbnb",
            resource_type: "image",
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );

        Readable.from([file]).pipe(stream);
      });
    } else {
      uploadResult = await cloudinary.uploader.upload(file, {
        folder: "airbnb",
        resource_type: "image",
      });

      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    }

    return uploadResult.secure_url;
  } catch (error) {
    console.error("CLOUDINARY ERROR:", error);

    if (typeof file === "string" && fs.existsSync(file)) {
      fs.unlinkSync(file);
    }

    throw error;
  }
};

export default uploadOnCloudinary;
