import mongoose from "mongoose";
import Recipe from "../models/Recipe.js";

// Helper: check ownership
const isOwner = (recipe, userId) => recipe.createdBy.toString() === userId.toString();

// GET all recipes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET recipe by ID
export const getRecipeById = async (req, res) => {
  try {
    const { recipeId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(recipeId))
      return res.status(400).json({ error: "Invalid recipe ID" });

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) return res.status(404).json({ error: "Recipe not found" });

    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST new recipe
export const createRecipe = async (req, res) => {
  try {
    const data = req.body;
    const recipe = new Recipe({ ...data, createdBy: req.user._id });
    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(500).json({ error: "Failed to save recipe" });
  }
};

// PUT update recipe
export const updateRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(recipeId))
      return res.status(400).json({ error: "Invalid recipe ID" });

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) return res.status(404).json({ error: "Recipe not found" });

    if (!isOwner(recipe, req.user._id)) return res.status(403).json({ error: "Not allowed" });

    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, req.body, { new: true });
    res.status(200).json(updatedRecipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE recipe
export const deleteRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(recipeId))
      return res.status(400).json({ error: "Invalid recipe ID" });

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) return res.status(404).json({ error: "Recipe not found" });

    if (!isOwner(recipe, req.user._id)) return res.status(403).json({ error: "Not allowed" });

    await Recipe.deleteOne({ _id: recipeId });
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
