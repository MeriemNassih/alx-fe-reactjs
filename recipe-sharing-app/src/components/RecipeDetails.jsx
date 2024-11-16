import { useRecipeStore } from './recipeStore';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) return <p>Recette introuvable.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Vous pouvez intégrer ici les composants EditRecipeForm et DeleteRecipeButton */}
    </div>
  );
};

export default RecipeDetails;
