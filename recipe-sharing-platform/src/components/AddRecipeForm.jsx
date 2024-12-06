import React, { useState } from 'react';

function AddRecipeForm() {
  // État pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  // État pour gérer les erreurs de validation
  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  // Validation du formulaire
  const validate = () => {
    const newErrors = {};
    
    // Validation du titre
    if (!formData.title) {
      newErrors.title = 'Le titre est requis.';
    }

    // Validation des ingrédients
    if (!formData.ingredients) {
      newErrors.ingredients = 'Les ingrédients sont requis.';
    }

    // Validation des étapes
    if (!formData.steps) {
      newErrors.steps = 'Les étapes de préparation sont requises.';
    }

    // Mise à jour des erreurs
    setErrors(newErrors);

    // Retourne vrai si aucun champ n'a d'erreur
    return Object.keys(newErrors).length === 0;
  };

  // Gère le changement dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;  // Utilisation de target.value
    setFormData({ ...formData, [name]: value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    if (validate()) {
      // Si la validation réussit, vous pouvez traiter les données du formulaire
      console.log('Données soumises:', formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ajouter une recette</h2>

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
          onChange={handleChange}  // Utilisation de handleChange
          className={`w-full border ${errors.title ? "border-red-500" : "border-gray-300"} rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
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
          onChange={handleChange}  // Utilisation de handleChange
          rows="4"
          className={`w-full border ${errors.ingredients ? "border-red-500" : "border-gray-300"} rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
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
          onChange={handleChange}  // Utilisation de handleChange
          rows="4"
          className={`w-full border ${errors.steps ? "border-red-500" : "border-gray-300"} rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      {/* Bouton de soumission */}
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
