// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { dbConnect } from "./db.js";
// import recipeRouter from "./routes/recipeRoutes.js";
// import userRouter from "./routes/userRoutes.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 4000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Root route for testing
// app.get("/", (req, res) => {
//   res.send("Backend is running!");
// });

// // Routes
// app.use("/users", userRouter);
// app.use("/recipes", recipeRouter);

// // Start server
// app.listen(PORT, async () => {
//   await dbConnect();
//   console.log(`[server]: running on port ${PORT}`);
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./db.js";
import recipeRouter from "./routes/recipeRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// CORS configuration
// app.use(cors({
//   origin: ["https://michaels-recipe-app.netlify.app"], // your frontend URL
//   credentials: true,
// }));

app.use(
  cors({
    origin: [
      "https://michaels-recipe-app.netlify.app",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);


// Root route for testing
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Routes
app.use("/users", userRouter);
app.use("/recipes", recipeRouter);

// Start server
app.listen(PORT, async () => {
  await dbConnect();
  console.log(`[server]: running on port ${PORT}`);
});
