import React, { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const handleChange = (e) => {
    // Utilisation correcte de e.target.value
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Ajouter une nouvelle recette
      </h2>

      {/* Champ Titre */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
          Titre de la recette
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange} // handleChange utilise e.target.value ici
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Champ Ingrédients */}
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
          Ingrédients
        </label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange} // handleChange utilise e.target.value ici
          rows="4"
          placeholder="Séparez les ingrédients par une virgule"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Champ Étapes */}
      <div className="mb-4">
        <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
          Étapes de préparation
        </label>
        <textarea
          id="steps"
          name="steps"
          value={formData.steps}
          onChange={handleChange} // handleChange utilise e.target.value ici
          rows="4"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Bouton Soumettre */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Ajouter la recette
      </button>
    </form>
  );
}

export default AddRecipeForm;
