import { createContext, useContext, useState, useEffect } from "react";
import { fetchRecipes } from "../api/api";

const RecipesContext = createContext();
export const useRecipes = () => useContext(RecipesContext);

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
      setLoading(false);
    };
    loadRecipes();
  }, []);

  const refreshRecipes = async () => {
    const data = await fetchRecipes();
    setRecipes(data);
  };

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes, loading, refreshRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};
