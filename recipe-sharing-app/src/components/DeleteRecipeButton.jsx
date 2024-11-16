import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId); // Suppression de la recette
    navigate('/'); // Redirection vers la liste des recettes après suppression
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red' }}>
      Supprimer la recette
    </button>
  );
};

export default DeleteRecipeButton;
