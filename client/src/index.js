import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecipesProvider } from "./context/RecipesContext";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RecipesProvider>
        <App />
      </RecipesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
