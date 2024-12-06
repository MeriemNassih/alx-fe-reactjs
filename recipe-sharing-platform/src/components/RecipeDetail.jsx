import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

export default function RecipeDetail() {
  const { id } = useParams(); // Récupère l'ID de la route
  const recipe = data.find((item) => item.id === parseInt(id)); // Trouve la recette correspondante

  if (!recipe) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl text-red-500">Recette introuvable !</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 shadow-lg rounded-lg bg-white">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-5 shadow-md"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-3">{recipe.title}</h1>
      <p className="text-gray-600 mb-5">{recipe.summary}</p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ingrédients :</h2>
      <ul className="list-disc pl-5 mb-5">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-600">{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Instructions :</h2>
      <ol className="list-decimal pl-5">
        {recipe.instructions.map((step, index) => (
          <li key={index} className="text-gray-600 mb-2">{step}</li>
        ))}
      </ol>
    </div>
  );
}
