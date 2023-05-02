import app from "./index.js";
import connectToDB from "./config/db.js";
const PORT = process.env.PORT || 4000;
import { v2 } from "cloudinary";
v2.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})
app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
  connectToDB()
});