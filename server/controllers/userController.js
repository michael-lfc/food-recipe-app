import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const JWT_SECRET = process.env.JWT_SECRET;
const SALT = Number(process.env.SALT);

// GET ALL USERS (for admin or testing) — SAFE VERSION
export const getAllUsers = async (req, res) => {
  try {
    // Find all users but EXCLUDE password field
    const users = await User.find().select("-password");

    // Optional: only show useful info
    const safeUsers = users.map(user => ({
      id: user._id,
      username: user.username || "No username",
      email: user.email,
      createdAt: user.createdAt,
      recipeCount: user.recipes ? user.recipes.length : 0
    }));

    res.status(200).json({
      success: true,
      count: safeUsers.length,
      users: safeUsers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server error: " + error.message
    });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, SALT);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to register user" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ _id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Failed to login" });
  }
};
