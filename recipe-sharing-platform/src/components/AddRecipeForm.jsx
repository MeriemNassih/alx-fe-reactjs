import React, { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Le titre est obligatoire.";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Veuillez fournir au moins deux ingrédients.";
    if (!formData.steps.trim())
      newErrors.steps = "Veuillez décrire les étapes de préparation.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Données du formulaire : ", formData);
      // Vous pouvez ajouter une logique pour envoyer les données
      alert("Recette ajoutée avec succès !");
      setFormData({ title: "", ingredients: "", steps: "" }); // Réinitialisation
    }
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
        <label
          htmlFor="title"
          className="block text-gray-700 font-semibold mb-2"
        >
          Titre de la recette
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      {/* Champ Ingrédients */}
      <div className="mb-4">
        <label
          htmlFor="ingredients"
          className="block text-gray-700 font-semibold mb-2"
        >
          Ingrédients
        </label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          rows="4"
          placeholder="Séparez les ingrédients par une virgule"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
        )}
      </div>

      {/* Champ Étapes */}
      <div className="mb-4">
        <label
          htmlFor="steps"
          className="block text-gray-700 font-semibold mb-2"
        >
          Étapes de préparation
        </label>
        <textarea
          id="steps"
          name="steps"
          value={formData.steps}
          onChange={handleChange}
          rows="4"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.steps && (
          <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
        )}
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
