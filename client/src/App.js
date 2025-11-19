// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Landing from "./pages/Landing";
import "./styles/theme.css";
import "./styles/navbar.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page at root */}
        <Route path="/" element={<Landing />} />

        {/* All app pages share Layout with Navbar */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} /> {/* /app */}
          <Route path="create" element={<Create />} /> {/* /app/create */}
          <Route path="recipe/:id" element={<Recipe />} /> {/* /app/recipe/:id */}
          <Route path="edit/:id" element={<Edit />} /> {/* /app/edit/:id */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
