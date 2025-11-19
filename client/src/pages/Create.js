import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../api/api";
import "../styles/Create.css";

const Create = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    instructions: "",
    ingredients: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatted = {
      ...form,
      ingredients: form.ingredients.split(",").map((i) => i.trim()),
    };
    await createRecipe(formatted);
    navigate("/app"); // Navigate to Home after creation
  };

  return (
    <div className="create-container">
      <h2 className="page-title">Create Recipe</h2>

      <form className="create-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input name="title" value={form.title} onChange={handleChange} required />

        <label>Author</label>
        <input name="author" value={form.author} onChange={handleChange} required />

        <label>Instructions</label>
        <textarea name="instructions" value={form.instructions} onChange={handleChange} />

        <label>Ingredients (comma separated)</label>
        <input name="ingredients" value={form.ingredients} onChange={handleChange} />

        <button className="save-btn">Create Recipe</button>
      </form>
    </div>
  );
};

export default Create;
