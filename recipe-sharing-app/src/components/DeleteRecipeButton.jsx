import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    alert('Recette supprimée avec succès.');
  };

  return <button onClick={handleDelete}>Supprimer la recette</button>;
};

export default DeleteRecipeButton;
