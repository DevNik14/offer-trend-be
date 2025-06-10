import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";

console.log(process.cwd())

dotenv.config();

export default async function connectToCloudinary() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });

  const options = {
    use_filename: true,
    asset_folder: "kaufland"
  }

  try {
    const result = await cloudinary.uploader.upload("D:\\DevFolder\\offer-trend-be\\storage\\images\\Lukanka_Gastro_XXL_(1).webp", options);
    console.log(result);
  } catch (err) {
    console.log(err);
  }

}