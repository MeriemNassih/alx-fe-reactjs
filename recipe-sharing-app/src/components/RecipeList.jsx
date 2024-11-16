import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import React, { useEffect } from 'react';


const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.filteredRecipes); 
  
    useEffect(() => {
      useRecipeStore.getState().filterRecipes();
    }, []);

  return (
    <div>
    {recipes.length === 0 ? (
      <p>Aucune recette trouvée.</p>
    ) : (
      recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))
    )}
  </div>
);
};

export default RecipeList;
