import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to Food Recipe App</h1>
        <p>Discover and share amazing recipes from around the world!</p>
        <div className="landing-buttons">
          <Link to="/app">
            <button className="landing-button">Get Started</button>
          </Link>
          <Link to="/app/create">
            <button className="landing-button secondary">Create Recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
