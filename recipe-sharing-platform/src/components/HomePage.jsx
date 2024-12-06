import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from './data.json'; // Assurez-vous que le chemin est correct


function HomePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {data.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white p-5 shadow-lg rounded-lg hover:shadow-xl transition duration-300"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h2>
          <p className="text-gray-600 mb-3">{recipe.summary}</p>
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-blue-500 hover:underline"
          >
            Voir la recette
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
