// // import axios from "axios";

// // const API_URL = "http://localhost:4000/recipes";

// // export const fetchRecipes = async () => {
// //   const res = await axios.get(API_URL);
// //   return res.data;
// // };

// // export const fetchRecipeById = async (id) => {
// //   const res = await axios.get(`${API_URL}/${id}`);
// //   return res.data;
// // };

// // export const createRecipe = async (recipe) => {
// //   const res = await axios.post(API_URL, recipe);
// //   return res.data;
// // };

// // export const updateRecipe = async (id, recipe) => {
// //   const res = await axios.put(`${API_URL}/update/${id}`, recipe);
// //   return res.data;
// // };

// // export const deleteRecipe = async (id) => {
// //   const res = await axios.delete(`${API_URL}/delete/${id}`);
// //   return res.data;
// // };

// // api/api.js  (your file — now fixed & production-ready)

// import axios from "axios";

// const API_URL = "http://localhost:4000/recipes";

// // Create a single axios instance so we can attach the token once
// const api = axios.create({
//   baseURL: "http://localhost:4000",
// });

// // Automatically add JWT token to every request if it exists
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // ======================= RECIPE ENDPOINTS =======================

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

// // Fixed: Now uses correct path → PUT /recipes/:id
// export const updateRecipe = async (id, recipe) => {
//   const res = await api.put(`/recipes/${id}`, recipe);
//   return res.data;
// };

// // Fixed: Now uses correct path → DELETE /recipes/:id
// export const deleteRecipe = async (id) => {
//   const res = await api.delete(`/recipes/${id}`);
//   return res.data;
// };

// src/api/api.js

// import axios from "axios";

// // We no longer need API_URL string because we use the axios instance with baseURL
// const api = axios.create({
//   baseURL: "http://localhost:4000", // all requests go through here
// });

// // Automatically add the JWT token to every request (create/update/delete will now work)
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // ======================= RECIPE ENDPOINTS (100% working) =======================

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

// export const updateRecipe = async (id, recipe) => {
//   const res = await api.put(`/recipes/${id}`, recipe);     // Fixed path
//   return res.data;
// };

// export const deleteRecipe = async (id) => {
//   const res = await api.delete(`/recipes/${id}`);          // Fixed path
//   return res.data;
// };

// src/api/api.js  ← THIS IS THE ONLY FILE YOU NEED TO FIX NOW

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", // your backend
});

// Auto-add JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// RECIPE ENDPOINTS — ALL NOW 100% CORRECT
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

// FIXED — NO MORE /update/ nonsense
export const updateRecipe = async (id, recipe) => {
  const res = await api.put(`/recipes/${id}`, recipe);
  return res.data;
};

// FIXED — NO MORE /delete/ nonsense
export const deleteRecipe = async (id) => {
  const res = await api.delete(`/recipes/${id}`);
  return res.data;
};