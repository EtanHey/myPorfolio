import { v2 as cloudinary } from "cloudinary";

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
const api_key = process.env.CLOUDINARY_API_KEY;
const api_secret = process.env.CLOUDINARY_API_SECRET;
console.log(cloud_name, api_key, api_secret);

if (!cloud_name || !api_key || !api_secret)
  console.error("no keys for cloudinary in profileCont");

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

export default cloudinary;
