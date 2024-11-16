import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div>
      <h1>Application de partage de recettes</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
