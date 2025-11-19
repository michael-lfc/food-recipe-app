// import { useEffect, useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { fetchRecipeById } from "../api/api";
// import "../styles/Recipe.css";


// const Recipe = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchRecipeById(id).then(setRecipe);
//   }, [id]);

//   if (!recipe) return <p className="loading">Loading recipe...</p>;

//   return (
//     <div className="recipe-container">
//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Back
//       </button>

//       <div className="recipe-card">
//         <h1 className="recipe-title">{recipe.title}</h1>

//         <p className="recipe-author">
//           <strong>Author:</strong> {recipe.author}
//         </p>

//         <h3 className="section-title">Ingredients</h3>
//         <ul className="ingredient-list">
//           {recipe.ingredients.map((item, idx) => (
//             <li key={idx}>{item}</li>
//           ))}
//         </ul>

//         <h3 className="section-title">Instructions</h3>
//         <p className="recipe-instructions">{recipe.instructions}</p>

//         <Link to={`/edit/${recipe._id}`} className="edit-btn">
//           Edit Recipe ✏️
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Recipe;


// src/pages/Recipe.js

import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchRecipeById } from "../api/api";
import "../styles/Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipeById(id).then(setRecipe).catch(() => {
      alert("Recipe not found or you're not logged in");
    });
  }, [id]);

  if (!recipe) return <p className="loading">Loading recipe...</p>;

  return (
    <div className="recipe-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>

      <div className="recipe-card">
        <h1 className="recipe-title">{recipe.title}</h1>

        <p className="recipe-author">
          <strong>Author:</strong> {recipe.author}
        </p>

        <h3 className="section-title">Ingredients</h3>
        <ul className="ingredient-list">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h3 className="section-title">Instructions</h3>
        <p className="recipe-instructions">{recipe.instructions}</p>

        {/* FIXED: Added /app → now goes to /app/edit/:id */}
        <Link to={`/app/edit/${recipe._id}`} className="edit-btn">
          Edit Recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;