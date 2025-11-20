// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:4000", // your backend
// });

// // Auto-add JWT token to every request
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // RECIPE ENDPOINTS — ALL NOW 100% CORRECT
// export const fetchRecipes = async () => {
//   const res = await api.get("/recipes");
//   return res.data;
// };

// export const fetchRecipeById = async (id) => {
//   const res = await api.get(`/recipes/${id}`);
//   return res.data;
// };

// export const createRecipe = async (recipe) => {
//   const res = await api.post("/recipes", recipe);
//   return res.data;
// };

// // FIXED — NO MORE /update/ nonsense
// export const updateRecipe = async (id, recipe) => {
//   const res = await api.put(`/recipes/${id}`, recipe);
//   return res.data;
// };

// // FIXED — NO MORE /delete/ nonsense
// export const deleteRecipe = async (id) => {
//   const res = await api.delete(`/recipes/${id}`);
//   return res.data;
// };

// client/src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://michael-recipe-api-1578959ef501.herokuapp.com", // LIVE BACKEND
});

// Auto-add JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// RECIPE ENDPOINTS
export const fetchRecipes = async () => {
  const res = await api.get("/recipes");
  return res.data;
};

export const fetchRecipeById = async (id) => {
  const res = await api.get(`/recipes/${id}`);
  return res.data;
};

export const createRecipe = async (recipe) => {
  const res = await api.post("/recipes", recipe);
  return res.data;
};

export const updateRecipe = async (id, recipe) => {
  const res = await api.put(`/recipes/${id}`, recipe);
  return res.data;
};

export const deleteRecipe = async (id) => {
  const res = await api.delete(`/recipes/${id}`);
  return res.data;
};

// AUTH ENDPOINTS — ADDED IN YOUR EXACT STYLE
export const loginUser = async (email, password) => {
  const res = await api.post("/users/login", { email, password });
  return res.data;
};

export const registerUser = async (username, email, password) => {
  const res = await api.post("/users/register", { username, email, password });
  return res.data;
};