import determinePath from '../utils/determinePath.js';
import determineSlash from '../utils/determineSlash.js';

import { v2 as cloudinary } from 'cloudinary';
import pLimit from 'p-limit';

import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const limit = pLimit(2);

export default async function connectToCloudinary() {

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });

  const pathToImages = determinePath();

  const kauflandImages = fs.readdirSync(pathToImages).map(item => `${pathToImages}${item}`);

  console.log(kauflandImages);

  const options = {
    use_filename: true,
    asset_folder: "kaufland",
    invalidate: true
  }

  // const uploadImages = () => {
  //   kauflandImages.forEach(async image => {
  //     const imageName = image.split("\\").slice(-1)[0]?.split(".")[0];
  //     try {
  //       const imageData = await cloudinary.uploader.upload(image, { ...options, public_id: imageName });
  //       console.log(imageData.url)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })
  // }

  const imagesTpUpload = kauflandImages.map(image => {
    return limit(async () => {
      const imageName = image.split(determineSlash).slice(-1)[0]?.split(".")[0];
      try {
        const imageData = await cloudinary.uploader.upload(image, { ...options, public_id: imageName });
        return imageData;
      } catch (err) {
        console.log(err);
      }
    })
  })

  const upload = await Promise.all(imagesTpUpload);
  console.log(upload);

  // uploadImages()

  // try {
  //   const result = await cloudinary.uploader.upload(path, options);
  //   console.log(result);
  // } catch (err) {
  //   console.log(err);
  // }

}