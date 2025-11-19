// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchRecipeById, updateRecipe, deleteRecipe } from "../api/api";
// import "./Edit.css";

// const Edit = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [form, setForm] = useState(null);

//   useEffect(() => {
//     fetchRecipeById(id).then((data) => {
//       setForm({
//         title: data.title,
//         author: data.author,
//         instructions: data.instructions,
//         ingredients: data.ingredients.join(", "),
//       });
//     });
//   }, [id]);

//   if (!form) return <p>Loading...</p>;

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();

//     await updateRecipe(id, {
//       ...form,
//       ingredients: form.ingredients.split(",").map((i) => i.trim()),
//     });

//     navigate(`/recipe/${id}`);
//   };

//   const handleDelete = async () => {
//     await deleteRecipe(id);
//     navigate("/");
//   };

//   return (
//     <div className="edit-container">
//       <nav className="navbar">
//         <h1 className="logo">Home | Edit Recipe</h1>
//       </nav>

//       <h1>Edit Recipe</h1>

//       <form className="edit-form" onSubmit={handleSave}>
//         <label>Title</label>
//         <input name="title" value={form.title} onChange={handleChange} />

//         <label>Author</label>
//         <input name="author" value={form.author} onChange={handleChange} />

//         <label>Instructions</label>
//         <textarea
//           name="instructions"
//           value={form.instructions}
//           onChange={handleChange}
//         />

//         <label>Ingredients (comma separated)</label>
//         <input
//           name="ingredients"
//           value={form.ingredients}
//           onChange={handleChange}
//         />

//         <button className="save-btn">Save Changes</button>
//       </form>

//       <button className="delete-btn" onClick={handleDelete}>
//         Delete Recipe
//       </button>
//     </div>
//   );
// };

// export default Edit;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRecipeById, updateRecipe, deleteRecipe } from "../api/api";
import Navbar from "../components/Navbar";
import "../styles/Edit.css";


const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetchRecipeById(id).then((data) =>
      setForm({
        title: data.title,
        author: data.author,
        instructions: data.instructions,
        ingredients: data.ingredients.join(", "),
      })
    );
  }, [id]);

  if (!form) return <p>Loading...</p>;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async (e) => {
    e.preventDefault();
    await updateRecipe(id, {
      ...form,
      ingredients: form.ingredients.split(",").map((i) => i.trim()),
    });
    navigate(`/recipe/${id}`);
  };

  const handleDelete = async () => {
    await deleteRecipe(id);
    navigate("/");
  };

  return (
    <div className="edit-container">
      <Navbar />
      <h2 className="page-title">Edit Recipe</h2>

      <form className="edit-form" onSubmit={handleSave}>
        <label>Title</label>
        <input name="title" value={form.title} onChange={handleChange} />

        <label>Author</label>
        <input name="author" value={form.author} onChange={handleChange} />

        <label>Instructions</label>
        <textarea name="instructions" value={form.instructions} onChange={handleChange} />

        <label>Ingredients (comma separated)</label>
        <input name="ingredients" value={form.ingredients} onChange={handleChange} />

        <button className="save-btn">Save Changes</button>
      </form>

      <button className="delete-btn" onClick={handleDelete}>
        Delete Recipe
      </button>
    </div>
  );
};

export default Edit;

// src/pages/Edit.js (or wherever you have it)

// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { fetchRecipeById, updateRecipe, deleteRecipe } from "../api/api";
// import Navbar from "../components/Navbar"; // adjust path if needed

// const Edit = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [form, setForm] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadRecipe = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchRecipeById(id);

//         // Safety: make sure the recipe actually exists and has the fields
//         if (!data || !data.title) {
//           throw new Error("Recipe not found");
//         }

//         setForm({
//           title: data.title || "",
//           author: data.author || "",
//           instructions: data.instructions || "",
//           // Convert array → comma-separated string for the input
//           ingredients:
//             Array.isArray(data.ingredients) 
//               ? data.ingredients.join(", ") 
//               : "",
//         });
//         setError(null);
//       } catch (err) {
//         console.error("Failed to load recipe:", err);
//         setError(err.response?.data?.error || err.message || "Failed to load recipe");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadRecipe();
//   }, [id]);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       await updateRecipe(id, {
//         ...form,
//         ingredients: form.ingredients
//           .split(",")
//           .map((i) => i.trim())
//           .filter(Boolean), // remove empty strings
//       });
//       navigate(`/recipe/${id}`);
//     } catch (err) {
//       alert("Failed to save: " + (err.response?.data?.error || err.message));
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm("Are you sure you want to delete this recipe?")) return;

//     try {
//       await deleteRecipe(id);
//       navigate("/");
//     } catch (err) {
//       alert("Failed to delete: " + (err.response?.data?.error || err.message));
//     }
//   };

//   // Loading state
//   if (loading) return <p>Loading recipe...</p>;

//   // Error state
//   if (error) {
//     return (
//       <div className="edit-container">
//         <Navbar />
//         <h2 className="page-title">Error</h2>
//         <p style={{ color: "red" }}>{error}</p>
//         <button onClick={() => navigate(-1)}>Go Back</button>
//       </div>
//     );
//   }

//   // Final render when everything is ready
//   return (
//     <div className="edit-container">
//       <Navbar />
//       <h2 className="page-title">Edit Recipe</h2>

//       <form className="edit-form" onSubmit={handleSave}>
//         <label>Title</label>
//         <input
//           name="title"
//           value={form.title || ""}
//           onChange={handleChange}
//           required
//         />

//         <label>Author</label>
//         <input
//           name="author"
//           value={form.author || ""}
//           onChange={handleChange}
//         />

//         <label>Instructions</label>
//         <textarea
//           name="instructions"
//           value={form.instructions || ""}
//           onChange={handleChange}
//           rows="8"
//           required
//         />

//         <label>Ingredients (comma separated)</label>
//         <input
//           name="ingredients"
//           value={form.ingredients || ""}
//           onChange={handleChange}
//           placeholder="e.g. flour, eggs, milk"
//           required
//         />

//         <button type="submit" className="save-btn">
//           Save Changes
//         </button>
//       </form>

//       <button className="delete-btn" onClick={handleDelete} style={{ marginTop: "20px" }}>
//         Delete Recipe
//       </button>
//     </div>
//   );
// };

// export default Edit;

// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { fetchRecipeById, updateRecipe, deleteRecipe } from "../api/api"; // check path!
// import Navbar from "../components/Navbar"; // adjust path if needed

// const Edit = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Start with an empty object instead of null → no more blank screen!
//   const [form, setForm] = useState({
//     title: "",
//     author: "",
//     instructions: "",
//     ingredients: "",
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const loadRecipe = async () => {
//       try {
//         console.log("Fetching recipe with id:", id); // DEBUG LINE
//         const data = await fetchRecipeById(id);
//         console.log("Recipe data received:", data);   // DEBUG LINE

//         setForm({
//           title: data.title || "",
//           author: data.author || "",
//           instructions: data.instructions || "",
//           ingredients: Array.isArray(data.ingredients)
//             ? data.ingredients.join(", ")
//             : "",
//         });
//         setError("");
//       } catch (err) {
//         console.error("Fetch failed:", err);          // DEBUG LINE
//         setError("Recipe not found or you don't have permission");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) loadRecipe();
//   }, [id]);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       await updateRecipe(id, {
//         ...form,
//         ingredients: form.ingredients
//           .split(",")
//           .map((i) => i.trim())
//           .filter(Boolean),
//       });
//       navigate(`/recipe/${id}`);
//     } catch (err) {
//       alert("Save failed: " + (err.response?.data?.error || err.message));
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm("Delete this recipe forever?")) return;
//     try {
//       await deleteRecipe(id);
//       navigate("/");
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   // ──────── RENDER ────────
//   if (loading) return <div>Loading recipe...</div>;
//   if (error)   return <div style={{color:"red"}}>{error}</div>;

//   return (
//     <div className="edit-container">
//       <Navbar />
//       <h2>Edit Recipe</h2>

//       <form onSubmit={handleSave}>
//         <input
//           name="title"
//           placeholder="Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="author"
//           placeholder="Author"
//           value={form.author}
//           onChange={handleChange}
//         />
//         <textarea
//           name="instructions"
//           placeholder="Instructions"
//           value={form.instructions}
//           onChange={handleChange}
//           rows="6"
//           required
//         />
//         <input
//           name="ingredients"
//           placeholder="Ingredients (comma separated)"
//           value={form.ingredients}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Save Changes</button>
//       </form>

//       <button onClick={handleDelete} style={{ marginTop: "20px", background: "red", color: "white" }}>
//         Delete Recipe
//       </button>
//     </div>
//   );
// };

// export default Edit;

// src/pages/Edit.js   ← copy-paste this entire file

// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { fetchRecipeById, updateRecipe, deleteRecipe } from "../api/api";
// import Navbar from "../components/Navbar";

// const Edit = () => {
//   const { id } = useParams();           // this now correctly gets the ID
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     title: "",
//     author: "",
//     instructions: "",
//     ingredients: "",
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     console.log("Edit page → Recipe ID:", id);   // ← check this in console!

//     const loadRecipe = async () => {
//       if (!id) {
//         setError("No recipe ID found in URL");
//         setLoading(false);
//         return;
//       }

//       try {
//         const data = await fetchRecipeById(id);

//         setForm({
//           title: data.title || "",
//           author: data.author || "",
//           instructions: data.instructions || "",
//           ingredients: Array.isArray(data.ingredients)
//             ? data.ingredients.join(", ")
//             : "",
//         });
//         setError("");
//       } catch (err) {
//         console.error("Failed to load recipe:", err);
//         const msg = err.response?.data?.error || err.message;
//         setError(msg === "Recipe not found" || msg === "Not allowed"
//           ? "Recipe not found or you don't own it"
//           : "Failed to load recipe – check login");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadRecipe();
//   }, [id]);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSave = async (e) => {
//     e.preventDefault();
//     try {
//       await updateRecipe(id, {
//         ...form,
//         ingredients: form.ingredients
//           .split(",")
//           .map((i) => i.trim())
//           .filter(Boolean),
//       });
//       navigate(`/app/recipe/${id}`);
//     } catch (err) {
//       alert("Save failed: " + (err.response?.data?.error || "Try again"));
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm("Delete this recipe forever?")) return;
//     try {
//       await deleteRecipe(id);
//       navigate("/app");
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   // ─────────────── RENDER ───────────────
//   if (loading) return <div style={{ padding: "100px", textAlign: "center" }}>Loading...</div>;

//   if (error) {
//     return (
//       <div style={{ padding: "50px", textAlign: "center", color: "red" }}>
//         <h2>Error</h2>
//         <p>{error}</p>
//         <button onClick={() => navigate(-1)}>← Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="edit-container">
//       <Navbar />
//       <h2 className="page-title">Edit Recipe</h2>

//       <form className="edit-form" onSubmit={handleSave}>
//         <label>Title</label>
//         <input name="title" value={form.title} onChange={handleChange} required />

//         <label>Author</label>
//         <input name="author" value={form.author} onChange={handleChange} />

//         <label>Instructions</label>
//         <textarea
//           name="instructions"
//           value={form.instructions}
//           onChange={handleChange}
//           rows="10"
//           required
//         />

//         <label>Ingredients (comma separated)</label>
//         <input
//           name="ingredients"
//           value={form.ingredients}
//           onChange={handleChange}
//           placeholder="flour, eggs, milk"
//           required
//         />

//         <button type="submit" className="save-btn">Save Changes</button>
//       </form>

//       <button onClick={handleDelete} className="delete-btn" style={{ marginTop: "30px" }}>
//         Delete Recipe
//       </button>
//     </div>
//   );
// };

// export default Edit;