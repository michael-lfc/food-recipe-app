import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("✅ Connected to MongoDB!"))
  .catch(err => console.log("❌ DB connection error:", err));
