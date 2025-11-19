// import express from "express";
// import tokenValidation from "../middlewares/tokenValidation.js";
// import {
//   getAllRecipes,
//   getRecipeById,
//   createRecipe,
//   updateRecipe,
//   deleteRecipe,
// } from "../controllers/recipeController.js";

// const router = express.Router();

// router.get("/", getAllRecipes);
// router.get("/:recipeId", getRecipeById);
// router.post("/", tokenValidation, createRecipe);
// router.put("/update/:recipeId", tokenValidation, updateRecipe);
// router.delete("/delete/:recipeId", tokenValidation, deleteRecipe);

// export default router;

// routes/recipeRoutes.js   ← REPLACE YOUR ENTIRE FILE WITH THIS

import express from "express";
import tokenValidation from "../middlewares/tokenValidation.js";
import {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

// Public routes
router.get("/", getAllRecipes);
router.get("/:recipeId", getRecipeById);

// Protected routes — CORRECT PATHS NOW
router.post("/", tokenValidation, createRecipe);
router.put("/:recipeId", tokenValidation, updateRecipe);        // FIXED
router.delete("/:recipeId", tokenValidation, deleteRecipe);     // FIXED

// Optional: cleaner way with .route()
/*
router.route("/")
  .get(getAllRecipes)
  .post(tokenValidation, createRecipe);

router.route("/:recipeId")
  .get(getRecipeById)
  .put(tokenValidation, updateRecipe)
  .delete(tokenValidation, deleteRecipe);
*/

export default router;
