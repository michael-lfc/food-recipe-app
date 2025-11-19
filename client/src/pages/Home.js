// import { Link } from "react-router-dom";
// import { useRecipes } from "../context/RecipesContext";
// import "../styles/Home.css"; // instead of ./Home.css


// const Home = () => {
//   const { recipes } = useRecipes();

//   return (
//     <div className="home-container">
//       <h2 className="home-title">All Recipes</h2>

//       <div className="recipe-grid">
//         {recipes.map((recipe) => (
//           <Link
//             to={`/recipe/${recipe._id}`}
//             key={recipe._id}
//             className="recipe-card"
//           >
//             <h3>{recipe.title}</h3>
//             <p className="recipe-author">By {recipe.author || "Unknown"}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import { Link } from "react-router-dom";
import { useRecipes } from "../context/RecipesContext";
import "../styles/Home.css";

const Home = () => {
  const { recipes } = useRecipes();

  return (
    <div className="home-container">
      <div className="home-header">
        <h2 className="home-title">All Recipes</h2>
        {/* Create Recipe button */}
        <Link to="/app/create">
          <button className="create-btn">Create Recipe</button>
        </Link>
      </div>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <Link
            to={`/app/recipe/${recipe._id}`} // fixed path to include /app
            key={recipe._id}
            className="recipe-card"
          >
            <h3>{recipe.title}</h3>
            <p className="recipe-author">By {recipe.author || "Unknown"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
